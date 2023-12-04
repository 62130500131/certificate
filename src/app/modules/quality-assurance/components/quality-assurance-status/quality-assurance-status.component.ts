import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CertificateData, QaStatusCompleteSearchParam, QaStatusCompleteViewModel, QaStatusMonitorViewModel, QaStatusSearchParam } from '../../models/qa-status.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductionService } from 'src/app/modules/production/services/production.service';
import { InformationViewModel } from 'src/app/modules/production/models/production.model';

@Component({
  selector: 'qa-status',
  templateUrl: './quality-assurance-status.component.html',
  styleUrls: ['./quality-assurance-status.component.css']
})
export class QualityAssuranceStatusComponent implements OnInit {

  public info: InformationViewModel[] = [];
  public modalRef!: BsModalRef;

  public img = "D:/Work/External/certificate/src/assets/pdfs/20.pdf"
  public productionOrder!: string;
  public fileToUpload!: File;
  public materialTypeUpload: string = '';
  public canClick!: false;
  public status!: string;
  public customerName!: string;
  public dateSampleReady: Date = new Date();
  public material!: string;
  public materialDesc!: string;
  public coilNo!: string;
  public heatNo!: string;
  public grade!: string;
  public machine!: string;
  public batch!: string;
  public bundleNo!: string;
  public date: Date = new Date();
  public selectMillorExcel: string = "isExcel";
  public selectMill: string = "isGJ";
  public selectExcel: string = "isTypeOne";

  @ViewChild('uploadTestResult') public uploadTestResult!: TemplateRef<any>;
  @ViewChild('information') public information!: TemplateRef<any>;

  public param: QaStatusSearchParam = new QaStatusSearchParam();
  public paramComplete: QaStatusCompleteSearchParam = new QaStatusCompleteSearchParam();

  public dataSourceMonitorStatus: QaStatusMonitorViewModel[] = [{
    productionOrder: "1080035252",
    itemNo: 1,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 20,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Wait Sample",
    unit: "KG"
  },
  {
    productionOrder: "1080035293",
    itemNo: 2,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 50,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Sample Ready",
    unit: "KG"
  },
  {
    productionOrder: "1080035294",
    itemNo: 3,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 10,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Wait Film",
    unit: "KG"
  },
  {
    productionOrder: "1080035295",
    itemNo: 4,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 5,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Film Ready",
    unit: "KG"
  },
  {
    productionOrder: "1080035296",
    itemNo: 5,
    materialCode: "2CTSL050-1219-1050",
    materialDesc: "เหล็กแผ่นดำ 5.0 x 1219 x 1050 mm SS400",
    qty: 5,
    soldTo: "10000007",
    soldToName: "Recheck-หจก. รวีวรรณพาณิชย์",
    grDate: (new Date()).toString(),
    status: "Film Ready",
    unit: "KG"
  }
  ];

  public dataSourceCompleteStatus: QaStatusCompleteViewModel[] = [{
    productionOrder: "1080035293",
    itemNo: 1,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 20,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Complete",
    unit: "KG"
  },
  {
    productionOrder: "1080035294",
    itemNo: 2,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 50,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Cancel",
    unit: "KG"
  },
  {
    productionOrder: "1080035295",
    itemNo: 3,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 10,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Cancel",
    unit: "KG"
  },
  {
    productionOrder: "1080035252",
    itemNo: 4,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 5,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Complete",
    unit: "KG"
  }
  ];

  public dateDataSource: any[] = [
    {
      text: 'ภายใน 90 วัน',
      value: 90
    },
    {
      text: 'ภายใน 60 วัน',
      value: 60
    },
    {
      text: 'ภายใน 30 วัน',
      value: 30
    },
    {
      text: 'ภายใน 7 วัน',
      value: 7
    },
    {
      text: 'ระบุเอง',
      value: 0
    }
  ];

  public gradeDataSource = [
    {
      text: 'SS400',
      value: 'SS400'
    },
    {
      text: 'SS490',
      value: 'SS490'
    },
    {
      text: 'SM490YA',
      value: 'SM490YA'
    },
    {
      text: 'SM490A',
      value: 'SM490A'
    },
    {
      text: 'SM400',
      value: 'SM400'
    },
    {
      text: 'S275JR',
      value: 'S275JR'
    },
    {
      text: 'S335JR',
      value: 'S335JR'
    },
    {
      text: 'HR-1',
      value: 'HR-1'
    },
    {
      text: 'SPHC',
      value: 'SPHC'
    },
    {
      text: 'A36',
      value: 'A36'
    },
    {
      text: 'A516',
      value: 'A516'
    },
  ];

  public materialTypeDataSource = [
    {
      text: 'ตัวซี',
      value: 'ตัวซี'
    },
    {
      text: 'ตัวซีมีขอบ',
      value: 'ตัวซีมีขอบ'
    },
    {
      text: 'เหล็กฉาก',
      value: 'เหล็กฉาก'
    },
    {
      text: 'ท่อกลม',
      value: 'ท่อกลม'
    },
    {
      text: 'ท่อเหลี่ยม',
      value: 'ท่อเหลี่ยม'
    },
    {
      text: 'ท่อแป๊ปแบน',
      value: 'ท่อแป๊ปแบน'
    },
    {
      text: 'เหล็กแผ่น',
      value: 'เหล็กแผ่น'
    }


  ];


  constructor(public _modalService: BsModalService,
    public _router: Router,
    private _productionService: ProductionService) { }

  ngOnInit() {
    this._productionService.getInformation().subscribe(res => {
      this.info = res;
    })
  }

  public onProductionDateRangeChanged($event: any): void {
    const { startDate, endDate } = $event.value;
    this.param.productionFrom = startDate;
    this.param.productionTo = endDate;
  }
  public onProductionCompleteDateRangeChanged($event: any): void {
    const { startDate, endDate } = $event.value;
    this.paramComplete.productionFrom = startDate;
    this.paramComplete.productionTo = endDate;
  }

  public onClickClear(): void {
    this.param = new QaStatusSearchParam();
  }
  public onClickClearComplete(): void {
    this.paramComplete = new QaStatusCompleteSearchParam();
  }
  public isEdit = false;
  public OnClickUpdateStatus(cell: any): void {
    this.materialTypeUpload = '';
    this.productionOrder = cell.data.productionOrder;
    this.status = cell.data.status;
    this.customerName = cell.data.soldToName;
    this.dateSampleReady = new Date();
    this.materialDesc = cell.data.materialDesc;
    this.material = cell.data.materialCode;
    this.coilNo = "";
    this.heatNo = "";
    this.grade = "";
    this.machine = "4586";
    if(cell.data.itemNo == 5){
      this.dateSampleReady = new Date()
      this.coilNo = "5220"
      this.heatNo = "DB51002"
      this.grade = "SS400"
      this.batch = "AKSTL"
      this.bundleNo = "1005836454"
      this.isEdit = true;
    }else{
      this.isEdit = false;
    }

    this.modalRef = this._modalService.show(this.uploadTestResult, {
      class: 'modal-xl'
    });
  }

  public onClickExitUpdateStatus(): void {
    this.modalRef.hide();
  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public onClickConfirmUpload(): void {
    this._router.navigate(['nac-certificate-entry']);
    this.modalRef.hide();
  }

  public OnClickDownStatus(cellData: QaStatusCompleteViewModel): void {
    Swal.fire({
      title: "Do you want to down status to sample ready?",
      icon: "question",
      heightAuto: false,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    });
  }
  public canEdit: boolean = true;
  public OnClickViewDetail(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        canEdit: this.canEdit
      }
    };
    this._router.navigate(['nac-certificate-view'], navigationExtras);
  }

  public onClickViewInformation(): void {
    this.modalRef = this._modalService.show(this.information, {
      class: 'modal-lg'
    });
  }
}

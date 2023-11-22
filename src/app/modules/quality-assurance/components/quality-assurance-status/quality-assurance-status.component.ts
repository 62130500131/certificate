import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CertificateData, QaStatusCompleteViewModel, QaStatusMonitorViewModel, QaStatusSearchParam } from '../../models/qa-status.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'qa-status',
  templateUrl: './quality-assurance-status.component.html',
  styleUrls: ['./quality-assurance-status.component.css']
})
export class QualityAssuranceStatusComponent implements OnInit {

  public modalRef!: BsModalRef;

  public productionOrder!: string;
  public fileToUpload!: File;
  public materialTypeUpload: string = '';
  public canClick! : false;

  @ViewChild('uploadTestResult') public uploadTestResult!: TemplateRef<any>;

  public param: QaStatusSearchParam = new QaStatusSearchParam();

  public dataSourceMonitorStatus: QaStatusMonitorViewModel[] = [{
    productionOrder: "11111111",
    itemNo: 1,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 20,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "wait sample",
  },
  {
    productionOrder: "22222222",
    itemNo: 2,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 50,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "sample ready",
  },
  {
    productionOrder: "33333333",
    itemNo: 3,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 10,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "wait film",
  },
  {
    productionOrder: "44444444",
    itemNo: 4,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 5,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "film ready",
  }
  ];

  public dataSourceCompleteStatus: QaStatusCompleteViewModel[] = [{
    productionOrder: "11111111",
    itemNo: 1,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 20,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "complete",
  },
  {
    productionOrder: "22222222",
    itemNo: 2,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 50,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "cancel",
  },
  {
    productionOrder: "33333333",
    itemNo: 3,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 10,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "cancel",
  },
  {
    productionOrder: "44444444",
    itemNo: 4,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 5,
    soldTo: "",
    soldToName: "",
    grDate: (new Date()).toString(),
    status: "complete",
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
    public _router: Router) { }

  ngOnInit() {
  }

  public onProductionDateRangeChanged($event: any): void {
    this.param.productionFrom = $event.value.startDate;
    this.param.productionTo = $event.value.endDateDate;
  }

  public onClickClear(): void {
    this.param = new QaStatusSearchParam();
  }

  public OnClickUpdateStatus(cell: any): void {
    this.materialTypeUpload = '';
    this.productionOrder = cell.data.productionOrder;

    this.modalRef = this._modalService.show(this.uploadTestResult, {
      class: 'modal-lg'
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

  public OnClickDownStatus(): void {

  }
}

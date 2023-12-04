import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { InformationViewModel, ProductionStatusCompleteViewModel, ProductionStatusMonitorViewModel, ProductionStatusSearchParam } from '../../models/production.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ProductionService } from '../../services/production.service';

@Component({
  selector: 'production-status',
  templateUrl: './production-status.component.html',
  styleUrls: ['./production-status.component.css']
})
export class ProductionStatusComponent implements OnInit {

  public isLoading: boolean = false;
  public modalRef!: BsModalRef;
  public paramComplete: ProductionStatusSearchParam = new ProductionStatusSearchParam();
  public paramMonitor: ProductionStatusSearchParam = new ProductionStatusSearchParam();
  public productionOrder!: string;
  public dateSampleReady!: Date;
  public customerName!: string;
  public materialDesc!: string;
  public coilNo!: string;
  public heatNo!: string;
  public machine!: string;
  public grade!: string;
  public selectedStatus: string = "sampleReady";
  public selectedStatusFilm: string = "filmReady";
  public info: InformationViewModel[] = [];

  @ViewChild('updateStatusWaitSample') public updateStatusWaitSample!: TemplateRef<any>;
  @ViewChild('updateStatusWaitFilm') public updateStatusWaitFilm!: TemplateRef<any>;
  @ViewChild('information') public information!: TemplateRef<any>;

  public dataSourceMonitorStatus: ProductionStatusMonitorViewModel[] = [{
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
    productionOrder: "1080035294",
    itemNo: 2,
    materialCode: "2CTFB",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 10,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Wait Film",
    unit: "KG"
  }
  ];

  public dataSourceCompleteStatus: ProductionStatusCompleteViewModel[] = [
    {
      productionOrder: "1080035252",
      itemNo: 1,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 5,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Sample Ready",
      unit: "KG"
    },
    {
      productionOrder: "1080035295",
      itemNo: 2,
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
      productionOrder: "1080035293",
      itemNo: 3,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 20,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Film Ready",
      unit: "KG"
    },
    {
      productionOrder: "1080035295",
      itemNo: 4,
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
      itemNo: 5,
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

  constructor(public _modalService: BsModalService,
    private _productionService: ProductionService) { }

  ngOnInit() {

    this._productionService.getInformation().subscribe(res => {
      this.info = res;
    })
  }

  public onProductionCompleteDateRangeChanged($event: any): void {
    const { startDate, endDate } = $event.value;
    this.paramComplete.productionFrom = startDate;
    this.paramComplete.productionTo = endDate;
  }

  public onProductionMonitorDateRangeChanged($event: any): void {
    const { startDate, endDate } = $event.value;
    this.paramMonitor.productionFrom = startDate;
    this.paramMonitor.productionTo = endDate;
  }

  public onClickCompleteClear(): void {
    this.paramComplete = new ProductionStatusSearchParam();
  }
  public onClickMonitorClear(): void {
    this.paramMonitor = new ProductionStatusSearchParam();
  }


  public rowIndex: number = 0;
  public OnClickUpdateStatus(cell: any): void {
    if (cell.data.status == 'Wait Sample') {
      this.rowIndex = cell.rowIndex;
      this.productionOrder = cell.data.productionOrder;
      this.customerName = cell.data.soldToName;
      this.dateSampleReady = new Date;
      this.materialDesc = cell.data.materialDesc;
      this.coilNo = "";
      this.heatNo = "";
      this.grade = "";
      this.machine = "4586";
      this.modalRef = this._modalService.show(this.updateStatusWaitSample, {
        class: 'modal-xl'
      });
    }
    else {
      this.rowIndex = cell.rowIndex;
      this.modalRef = this._modalService.show(this.updateStatusWaitFilm, {
        class: 'modal-xl'
      });
    }
  }

  public OnClickDownStatus(cell: any): void {
    if (cell.data.status == 'Cancel') {
      Swal.fire({
        title: "Do you want to down status to wait sample?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      });
    }
    if (cell.data.status == 'Sample Ready') {
      Swal.fire({
        title: "Do you want to down status to wait sample?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      });
    }
    if (cell.data.status == 'Film Ready') {
      Swal.fire({
        title: "Do you want to down status to wait film?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      });
    }
  }

  public radioChangeCancel($event: any): void {

  }
  public radioChangeSampleRaedy($event: any): void {

  }
  public onClickConfirm(): void {
    if (this.selectedStatus == "sampleReady") {
      this.dataSourceMonitorStatus.splice(this.rowIndex, 1);
      this.modalRef.hide();
    }
    if (this.selectedStatus == "cancelRadio") {
      Swal.fire({
        title: "Do you want to cancel this order?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.dataSourceMonitorStatus.splice(this.rowIndex, 1);
          this.modalRef.hide();
        }
      });
    }
  }

  public onClickConfirmWaitFilm(): void {
    if (this.selectedStatusFilm == "filmReady") {
      this.dataSourceMonitorStatus.splice(this.rowIndex, 1);
      this.modalRef.hide();
    }
    if (this.selectedStatusFilm == "cancelRadio") {
      Swal.fire({
        title: "Do you want to cancel this order?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.dataSourceMonitorStatus.splice(this.rowIndex, 1);
          this.modalRef.hide();
        }
      });
    }
  }

  public onClickViewInformation(): void {
    this.modalRef = this._modalService.show(this.information);
  }



}

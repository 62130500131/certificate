import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductionStatusCompleteViewModel, ProductionStatusMonitorViewModel, ProductionStatusSearchParam } from '../../models/production.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'production-status',
  templateUrl: './production-status.component.html',
  styleUrls: ['./production-status.component.css']
})
export class ProductionStatusComponent implements OnInit {

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

  public selectWaitSample: string = 'waitSample';
  public selectWaitFilm: string = 'waitFilm';
  public selectSampleReady: string = 'sampleReady';
  public selectFilmReady: string = 'filmReady';
  public selectCancel: string = 'complete';
  public selectComplete: string = 'cancel';

  @ViewChild('updateStatusWaitSample') public updateStatusWaitSample!: TemplateRef<any>;
  @ViewChild('updateStatusWaitFilm') public updateStatusWaitFilm!: TemplateRef<any>;

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
  },
  {
    productionOrder: "1080035295",
    itemNo: 4,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 5,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Film Ready",
  }
  ];

  public dataSourceCompleteStatus: ProductionStatusCompleteViewModel[] = [{
    productionOrder: "1080035293",
    itemNo: 1,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 20,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Complete",
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
  },
  {
    productionOrder: "1080035252",
    itemNo: 4,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
    qty: 5,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "Complete",
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

  constructor(public _modalService: BsModalService) { }

  ngOnInit() {
  }

  public onProductionCompleteDateRangeChanged($event: any): void {
    this.paramComplete.productionFrom = $event.value.startDate;
    this.paramComplete.productionTo = $event.value.endDateDate;
  }

  public onProductionMonitorDateRangeChanged($event: any): void {
    this.paramComplete.productionFrom = $event.value.startDate;
    this.paramComplete.productionTo = $event.value.endDateDate;
  }

  public onClickCompleteClear(): void {
    this.paramComplete = new ProductionStatusSearchParam();
  }
  public onClickMonitorClear(): void {
    this.paramMonitor = new ProductionStatusSearchParam();
  }



  public OnClickUpdateStatus(cell: any): void {
    if (cell.data.status == 'Wait Sample') {
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
      this.modalRef = this._modalService.show(this.updateStatusWaitFilm, {
        class: 'modal-xl'
      });
    }
  }

  public OnClickDownStatus(): void {

  }

  public radioChangeCancel($event: any): void {
    console.log("$event:", $event)

  }
  public radioChangeSampleRaedy($event: any): void {
    console.log("$event:", $event)

  }
  public onClickConfirm(): void {
    this.modalRef.hide();
  }

}

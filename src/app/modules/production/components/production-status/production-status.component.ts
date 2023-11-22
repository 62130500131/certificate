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
[x: string]: any;
  public modalRef!: BsModalRef;
  public param: ProductionStatusSearchParam = new ProductionStatusSearchParam();
  public productionOrder!: string;
  
  @ViewChild('updateStatus') public updateStatus!: TemplateRef<any>;

  public dataSourceMonitorStatus: ProductionStatusMonitorViewModel[] = [{
    productionOrder: "1080035252",
    itemNo: 1,
    materialCode: "1HC10000-015L",
    materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
    qty: 20,
    soldTo: "10000001",
    soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
    grDate: (new Date()).toString(),
    status: "wait sample",
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
    status: "sample ready",
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
    status: "wait film",
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
    status: "film ready",
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
    status: "complete",
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
    status: "cancel",
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
    status: "cancel",
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

  constructor(public _modalService: BsModalService) { }

  ngOnInit() {
  }

  public onProductionDateRangeChanged($event: any): void {
    this.param.productionFrom = $event.value.startDate;
    this.param.productionTo = $event.value.endDateDate;
  }

  public onClickClear(): void {
    this.param = new ProductionStatusSearchParam();
  }

  public OnClickUpdateStatus(cell: any): void {
    this.productionOrder = cell.data.productionOrder;

    this.modalRef = this._modalService.show(this.updateStatus, {
      class: 'modal-lg'
    });
  }

  public OnClickDownStatus(): void {

  }

  public radioChangeCancel($event: any): void {
  console.log("$event:", $event)

  }
  public radioChangeSampleRaedy($event: any): void {
  console.log("$event:", $event)

  }
  public onClickConfirm():void {
    this.modalRef.hide();
  }

}

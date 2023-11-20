import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DoShipmentEntryViewModel, SelectQuantity } from '../../model/do.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'do-shipment-entry',
  templateUrl: './do-shipment-entry.component.html',
  styleUrls: ['./do-shipment-entry.component.css']
})
export class DoShipmentEntryComponent {
  @ViewChild('selectTemplate') selectTemplate! :TemplateRef<any>;
  @ViewChild('addDetailTemplate') addDetailTemplate! :TemplateRef<any>;
  public modalRef!: BsModalRef;
  public list: DoShipmentEntryViewModel[] = [
    {
      doNo: '210000001',
      dataSource: [
        {
          itemIndex: 1,
          material: '2CTFB',
          heatNo: 'DB1077',
          quantity:  40, 
          status: 'Select'
        },
        {
          itemIndex: 2,
          material: '2CTFB',
          heatNo: 'DB1078',
          quantity:  20, 
          status: 'Edit'
        },
        {
          itemIndex: 3,
          material: '2CTFB',
          heatNo: 'DB1079',
          quantity:  40, 
          status: 'Select'
        },
        {
          itemIndex: 4,
          material: '2CTFB',
          heatNo: 'DB1077',
          quantity:  30, 
          status: 'Select'
        }
      ]
    },
    {
      doNo: '210000002',
      dataSource: [
        {
          itemIndex: 1,
          material: '2CTFB',
          heatNo: 'DB1077',
          quantity:  22, 
          status: 'Select'
        }
      ]
    },
    {
      doNo: '210000003',
      dataSource: [
        {
          itemIndex: 1,
          material: '2CTFB',
          heatNo: 'DB1079',
          quantity:  20, 
          status: 'Select'
        }
      ]
    },

  ]

  public selectDataSource: SelectQuantity[] = [
    {
      isSelected : false,
      itemIndex : 1,
      material : '2CTFB',
      materialDesc : 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo : 'DB1077',
      mill : 'SYS',
      remain : 20, 
      quantity : 20 
    },
    {
      isSelected : false,
      itemIndex : 2,
      material : '2CTFB',
      materialDesc : 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo : 'DB1077',
      mill : 'SYS',
      remain : 20, 
      quantity : 20 
    },
    {
      isSelected : false,
      itemIndex : 3,
      material : '2CTFB',
      materialDesc : 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo : 'DB1099',
      mill : 'SYS',
      remain : 20, 
      quantity : 20 
    }];

  constructor(private router: Router,
              private modalService: BsModalService){

  }

  public onClickExit():void{
    this.router.navigate(['do-page'])
  }

  public onClickSelect():void {
    this.modalRef =  this.modalService.show(this.selectTemplate, {
      class : 'modal-xl'
    })
  }

  public onClickConfirmSelect():void{
    this.modalRef.hide();
  }

  public onClickAddDetail():void {
    this.modalRef = this.modalService.show(this.addDetailTemplate, {
      class: 'modal-lg'
    })
  }
  public onClickConfirmAddDetail(): void{
    this.modalRef.hide();
  }

  public onClickSentLink():void {
    alert('Sent link success!')
  }
}

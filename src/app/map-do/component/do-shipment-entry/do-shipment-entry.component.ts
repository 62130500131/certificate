import { Component } from '@angular/core';
import { DoShipmentEntryViewModel } from '../../model/do.model';
import { Router } from '@angular/router';

@Component({
  selector: 'do-shipment-entry',
  templateUrl: './do-shipment-entry.component.html',
  styleUrls: ['./do-shipment-entry.component.css']
})
export class DoShipmentEntryComponent {

  public list: DoShipmentEntryViewModel[] = [
    {
      doNo: '210000001',
      dataSource: [
        {
          itemIndex: '001',
          material: '2CTFB',
          heatNo: '000',
          quantity:  20, 
          status: 'Select'
        },
        {
          itemIndex: '001',
          material: '2CTFB',
          heatNo: '000',
          quantity:  20, 
          status: 'Edit'
        },
        {
          itemIndex: '001',
          material: '2CTFB',
          heatNo: '000',
          quantity:  20, 
          status: 'Select'
        },
        {
          itemIndex: '001',
          material: '2CTFB',
          heatNo: '000',
          quantity:  20, 
          status: 'Select'
        }
      ]
    },
    {
      doNo: '210000002',
      dataSource: [
        {
          itemIndex: '001',
          material: '2CTFB',
          heatNo: '000',
          quantity:  20, 
          status: 'Select'
        }
      ]
    },
    {
      doNo: '210000003',
      dataSource: [
        {
          itemIndex: '001',
          material: '2CTFB',
          heatNo: '000',
          quantity:  20, 
          status: 'Select'
        }
      ]
    },

  ]

  constructor(private router: Router){

  }

  public onClickExit():void{
    this.router.navigate(['do-page'])
  }
}

import { Component } from '@angular/core';
import { doViewModel } from '../../model/do.model';
import { Router } from '@angular/router';

@Component({
  selector: 'do-page',
  templateUrl: './do-page.component.html',
  styleUrls: ['./do-page.component.css']
})
export class DoPageComponent {

  public dataSource: doViewModel[] = [
    {
      shipmentCode: 2311092790,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      heatNo: "DB1077"
    },
    {
      shipmentCode: 2311092791,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      heatNo: "DB1077"
    },
    {
      shipmentCode: 2311092792,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      heatNo: "DB1077"
    }
  ]

  constructor(private router: Router){
  }

  public onClickShipment(data: any):void {
    this.router.navigate(['do-entry'])
  }
}

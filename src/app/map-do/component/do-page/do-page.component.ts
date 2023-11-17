import { Component } from '@angular/core';
import { doViewModel } from '../../model/do.model';

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
      heatNo: "A123456"
    },
    {
      shipmentCode: 2311092791,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      heatNo: "A123456"
    },
    {
      shipmentCode: 2311092792,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      heatNo: "A123456"
    }
  ]
}

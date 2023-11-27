import { Component } from '@angular/core';
import { MappingCertificateSearchParam, doViewModel } from '../../models/do.model';
import { Router } from '@angular/router';

@Component({
  selector: 'do-page',
  templateUrl: './do-page.component.html',
  styleUrls: ['./do-page.component.css']
})
export class DoPageComponent {

  public param: MappingCertificateSearchParam = new MappingCertificateSearchParam()
  public dataSource: doViewModel[] = [
    {
      shipmentCode: 2311092790,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      deliveryDate: new Date()
    },
    {
      shipmentCode: 2311092791,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      deliveryDate: new Date()
    },
    {
      shipmentCode: 2311092792,
      customerCode: 10000217,
      customerName: "บริษัท ธุรกิจเหล็กดี จำกัด",
      deliveryDate: new Date()
    }
  ]

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
  ]


  constructor(private router: Router) {
  }

  public onClickShipment(data: any): void {

    this.router.navigate([`do-entry/${data.shipmentCode}`])
  }

  public onClickClear(): void {
    this.param = new MappingCertificateSearchParam();
  }

  public onClickSearch(): void {

  }

  public onDeliveryDateRangeChanged($event: any): void {
    this.param.deliveryFrom = $event.data.value.startDate;
    this.param.deliveryTo = $event.data.value.endDateDate;
  }
}

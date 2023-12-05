import { Component, OnInit } from '@angular/core';
import { MappingCertificateSearchParam, ShipmentInfoViewModel } from '../../models/do.model';
import { Router } from '@angular/router';
import { MapCertificateService } from '../../services/map-certificate.sevice';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'do-page',
  templateUrl: './do-page.component.html',
  styleUrls: ['./do-page.component.css']
})
export class DoPageComponent implements OnInit {

  public param: MappingCertificateSearchParam = new MappingCertificateSearchParam()
  public dataSource: ShipmentInfoViewModel[] = []

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


  constructor(private router: Router,
              private service: MapCertificateService,
              private sharedService: SharedService) {
  }

  public ngOnInit(): void {
    this.sharedService.showLoading();
    this.service.initialList().subscribe(res => {
      this.dataSource = res
      this.sharedService.hideLoading();
    })
  }
  public onClickShipment(data: any): void {
    this.router.navigate([`do-entry/${data.shipmentNo}/${data.shiptoCode}`])
  }

  public onClickClear(): void {
    this.param = new MappingCertificateSearchParam();
  }

  public onClickSearch(): void {

  }

  public onDeliveryDateRangeChanged($event: any): void {
    this.param.deliveryFrom = $event.value.startDate;
    this.param.deliveryTo = $event.value.endDateDate;
  }
}

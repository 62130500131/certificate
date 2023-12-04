import { Component, OnInit } from '@angular/core';
import { CustomerHistorySearchParam, CustomerHistoryViewModel, CustomerPOViewModel } from '../../models/customer-history.model';
import Swal from 'sweetalert2';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-template',
  templateUrl: './customer-template.component.html',
  styleUrls: ['./customer-template.component.css']
})
export class CustomerTemplateComponent implements OnInit {
  
  public param: CustomerHistorySearchParam = new CustomerHistorySearchParam();

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

  public dataCustomer: CustomerPOViewModel[] = []

  constructor(private _customerService: CustomerService) {

  }

  ngOnInit(): void {
    this._customerService.getDataSource().subscribe(res => {
      this.dataCustomer = res;
    })
  }

  public onClickDownload(): void {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Download Success!",
      showConfirmButton: false,
      timer: 1500
    });
  }

  public onClickSearch(): void {

  }

  public onClickClear(): void {
    this.param = new CustomerHistorySearchParam();
  }

  public onDateRangeChanged($event: any): void {
    this.param.dateFrom = $event.value.startDate;
    this.param.dateTo = $event.value.endDateDate;
  }

}

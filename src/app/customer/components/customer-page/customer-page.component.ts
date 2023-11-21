import { Component } from '@angular/core';
import { CustomerHistorySearchParam, CustomerHistoryViewModel } from '../../models/customer-history.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {

  public param: CustomerHistorySearchParam = new CustomerHistorySearchParam();
  public dataSource: CustomerHistoryViewModel[] = [
    {
      doNo: "21567891",
      date: '',
      itemNo: 1,
      materialDesc: "ท่อดำ 3/4x 2.0mm x 6400mm",
      qty: 20
    },
    {
      doNo: "21567891",
      date: '',
      itemNo: 2,
      materialDesc: "เหล็กฉาก SS400 ความยาวใดๆ",
      qty: 10
    },
    {
      doNo: "21567892",
      date: '',
      itemNo: 1,
      materialDesc: "เหล็กลายพับตามแบบ",
      qty: 50
    },
    {
      doNo: "21567893",
      date: '',
      itemNo: 1,
      materialDesc: "ตัวซีมีขอบ ขนาดใดๆ",
      qty: 5
    },
    {
      doNo: "21567893",
      date: '',
      itemNo: 2,
      materialDesc: "เหล็กลายพับตามแบบ",
      qty: 10
    },
    {
      doNo: "21567893",
      date: '',
      itemNo: 3,
      materialDesc: "เหล็กฉาก SS400 ความยาวใดๆ",
      qty: 25
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
  ]

  public onDateRangeChanged($event: any): void {
    this.param.dateFrom = $event.value.startDate;
    this.param.dateTo = $event.value.endDate;
  }

  public onClickDownload(): void {
    alert("Download Success!");
  }

  public onClickSearch(): void {

  }

  public onClickClear(): void {

  }
}

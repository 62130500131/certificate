import { Component } from '@angular/core';
import { customerHistory } from '../../models/customer-history.model';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {
  public data: customerHistory[] = [
    {
      doNo: "21567891",
      date: new Date,
      itemNo: 1,
      materialDesc: "ท่อดำ 3/4x 2.0mm x 6400mm",
      qty: 20
    },
    {
      doNo: "21567891",
      date: new Date,
      itemNo: 2,
      materialDesc: "เหล็กฉาก SS400 ความยาวใดๆ",
      qty: 10
    },
    {
      doNo: "21567892",
      date: new Date,
      itemNo: 1,
      materialDesc: "เหล็กลายพับตามแบบ",
      qty: 50
    },
    {
      doNo: "21567893",
      date: new Date,
      itemNo: 1,
      materialDesc: "ตัวซีมีขอบ ขนาดใดๆ",
      qty: 5
    },
    {
      doNo: "21567893",
      date: new Date,
      itemNo: 2,
      materialDesc: "เหล็กลายพับตามแบบ",
      qty: 10
    },
    {
      doNo: "21567893",
      date: new Date,
      itemNo: 3,
      materialDesc: "เหล็กฉาก SS400 ความยาวใดๆ",
      qty: 25
    }

  ];

  public onClickDownload(): void {
    alert("Download Success!");
  }

  public onClickSearch(): void {
    
  }

  public onClickClear(): void {
    
  }
}

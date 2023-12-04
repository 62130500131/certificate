import { Injectable } from '@angular/core';
import { CustomerPOViewModel } from '../../models/customer-history.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dataSource: CustomerPOViewModel[] = [
    {
      poNo: "H243409",
      soNo: "130054806",
      shipToName: "",
      address: "",
      dataSource: [
        {
          doNo: "21567891",
          doDate: (new Date()).toString(),
          dataSource: [
            {
              itemNo: "1",
              materialDesc: "ท่อดำ 3/4x 2.0mm x 6400mm",
              qty: 20,
              unit: "KG"
            },
            {
              itemNo: "2",
              materialDesc: "เหล็กฉาก SS400 ความยาวใดๆ",
              qty: 10,
              unit: "KG"
            },
          ]
        },
        {
          doNo: "21567892",
          doDate: (new Date()).toString(),
          dataSource: [
            {
              itemNo: "1",
              materialDesc: "เหล็กลายพับตามแบบ",
              qty: 50,
              unit: "KG"
            }
          ]
        },
        {
          doNo: "21567893",
          doDate: (new Date()).toString(),
          dataSource: [
            {
              itemNo: "1",
              materialDesc: "ตัวซีมีขอบ ขนาดใดๆ",
              qty: 5,
              unit: "KG"
            },
            {
              itemNo: "2",
              materialDesc: "เหล็กลายพับตามแบบ",
              qty: 10,
              unit: "KG"
            },
            {
              itemNo: "3",
              materialDesc: "	เหล็กฉาก SS400 ความยาวใดๆ",
              qty: 25,
              unit: "KG"
            }
          ]
        }
      ]
    }
  ]

  public getDataSource(): Observable<CustomerPOViewModel[]> {
    return of(this.dataSource);
  }

}

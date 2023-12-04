import { Injectable } from '@angular/core';
import { InformationViewModel } from '../models/production.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  private info: InformationViewModel[] = [
    {
      status: "Wait Sample",
      explanation: ""
    },
    {
      status: "Wait Film",
      explanation: ""
    },
    {
      status: "Sample Ready",
      explanation: ""
    },
    {
      status: "Film Ready",
      explanation: ""
    },
    {
      status: "Complete",
      explanation: "รายการแผนทดสอบที่เสร็จสิ้นแล้ว"
    },
    {
      status: "Cancel",
      explanation: "รายการที่ยกเลิกแผนการทดสอบ"
    },
  ]

  public getInformation(): Observable<InformationViewModel[]> {
    return of(this.info);
  }

}

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
      explanation: "รายการแผนทดสอบประเภท"
    },
    {
      status: "Wait Film",
      explanation: "รายการแผนทดสอบประเภท"
    },
    {
      status: "Sample Ready",
      explanation: "รายการแผนทดสอบประเภท ที่พร้อมเข้ากระบวนการทดสอบ"
    },
    {
      status: "Film Ready",
      explanation: "รายการแผนทดสอบประเภท ที่พร้อมเข้ากระบวนการทดสอบ"
    },
    {
      status: "Complete",
      explanation: "รายการแผนทดสอบที่เสร็จสิ้นแล้ว"
    },
    {
      status: "Cancel",
      explanation: "รายการแผนทดสอบที่ถูกยกเลิก"
    },
  ]

  public getInformation(): Observable<InformationViewModel[]> {
    return of(this.info);
  }

}

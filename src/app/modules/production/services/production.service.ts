import { Injectable } from '@angular/core';
import { InformationViewModel, ProductionStatusViewModel } from '../models/production.model';
import { Observable, of } from 'rxjs';
import { LoadResult } from 'devextreme/common/data/custom-store';

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
  ];

  private dataSource: ProductionStatusViewModel[] = [
    {
      productionOrder: "1080035252",
      itemNo: 1,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 20,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Wait Sample",
      unit: "KG"
    },
    {
      productionOrder: "1080035294",
      itemNo: 2,
      materialCode: "2CTFB",
      materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
      qty: 10,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Wait Film",
      unit: "KG"
    },
    {
      productionOrder: "1080035252",
      itemNo: 1,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 5,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Sample Ready",
      unit: "KG"
    },
    {
      productionOrder: "1080035295",
      itemNo: 2,
      materialCode: "2CTFB",
      materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
      qty: 10,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Cancel",
      unit: "KG"
    },
    {
      productionOrder: "1080035293",
      itemNo: 3,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 20,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Film Ready",
      unit: "KG"
    },
    {
      productionOrder: "1080035295",
      itemNo: 4,
      materialCode: "2CTFB",
      materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
      qty: 10,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Cancel",
      unit: "KG"
    },
    {
      productionOrder: "1080035252",
      itemNo: 5,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 5,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Complete",
      unit: "KG"
    }
  ]

  public getInformation(): Observable<InformationViewModel[]> {
    return of(this.info);
  }

  public queryMonitorGrid(param: any): Observable<LoadResult<ProductionStatusViewModel>> {
    const data = this.dataSource.filter(e => e.status != 'Complete' && e.status != 'Cancel');
    return of({
      data: data,
      totalCount: data.length
    })
  }

  public queryCompleteGrid(param: any): Observable<LoadResult<ProductionStatusViewModel>> {
    const data = this.dataSource.filter(e => e.status == 'Complete' || e.status == 'Cancel');
    return of({
      data: data,
      totalCount: data.length
    })
  }

}

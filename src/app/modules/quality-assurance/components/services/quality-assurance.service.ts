import { Injectable } from '@angular/core';
import { QaStatusCompleteViewModel, QaStatusMonitorViewModel, QaStatusViewModel } from '../../models/qa-status.model';
import { Observable, delay, filter, of } from 'rxjs';
import { LoadResult } from 'devextreme/common/data/custom-store';

@Injectable({
  providedIn: 'root'
})
export class QualityAssuranceService {

  public dataSource: QaStatusViewModel[] = [
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
      productionOrder: "1080035293",
      itemNo: 2,
      materialCode: "2CTFB",
      materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
      qty: 50,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Sample Ready",
      unit: "KG"
    },
    {
      productionOrder: "1080035294",
      itemNo: 3,
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
      productionOrder: "1080035295",
      itemNo: 4,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 5,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Film Ready",
      unit: "KG"
    },
    {
      productionOrder: "1080035293",
      itemNo: 1,
      materialCode: "1HC10000-015L",
      materialDesc: "เหล็กม้วนดำ SS400 1.50mmxกว้างใดๆxC Long",
      qty: 20,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Complete",
      unit: "KG"
    },
    {
      productionOrder: "1080035294",
      itemNo: 2,
      materialCode: "2CTFB",
      materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
      qty: 50,
      soldTo: "10000001",
      soldToName: "บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน",
      grDate: (new Date()).toString(),
      status: "Cancel",
      unit: "KG"
    },
    {
      productionOrder: "1080035295",
      itemNo: 3,
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
      itemNo: 4,
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

  constructor() { }

  public queryMonitorGrid(param: any): Observable<any> {
    const data = this.dataSource.filter(e => e.status != 'Complete' && e.status != 'Cancel');
    return of({
      data: data,
      totalCount: data.length
    })
  }

  public queryCompleteGrid(param: any): Observable<LoadResult<QaStatusViewModel>> {
    const data = this.dataSource.filter(e => e.status == 'Complete' || e.status == 'Cancel');
    return of({
      data: data,
      totalCount: data.length
    })
  }

  public undoStatus(param: QaStatusViewModel): Observable<void> {
    let item = this.dataSource.find(x => x.productionOrder === param.productionOrder && x.itemNo === param.itemNo)
    if (!!item) {
      if ((item.status === 'Cancel') || (item.status === 'Complete')) {
        item.status = 'Sample Ready'
        return of();
      } else {
        return of()
      }
    }
    return of()
  }

}

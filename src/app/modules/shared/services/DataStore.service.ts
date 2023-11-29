import { Injectable } from "@angular/core";
import { SelectBox } from "../models/selectBox.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {


    private customerDataSource: SelectBox[] = [
        {
            text: '10000001 : บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน',
            value: '10000001'
        },
        {
            text: '10000002 : บริษัท เอ.เอ็น.สตีล จำกัด',
            value: '10000002'
        },
        {
            text: '10000003 : บริษัท ป้อเจริญค้าวัสดุ จำกัด',
            value: '10000003'
        },
        {
            text: '10000004 : บริษัท ไททัน สตีล จำกัด',
            value: '10000004'
        },
        {
            text: '10000005 : บริษัท ซี.เค.เอส. โลหะกิจ จำกัด',
            value: '10000005'
        },
        {
            text: '10000006 : บริษัท สินกิจไพบูลย์โลหะการ จำกัด',
            value: '10000006'
        },
        {
            text: '90010003 : Ship to บริษัท เอเซี่ยนสติลโปรดักส์ จำกัด',
            value: '90010003'
        },
        {
            text: '90010007 : Ship to หจก. สัมพันธ์วัสดุก่อสร้าง',
            value: '90010007'
        },
        {
            text: '90010054 : Ship to - ไทยวัสดุ กาญ',
            value: '90010054'
        }
        
    ]
    private districtDataSource: SelectBox[] = [
        {
            text: 'เขตพระนคร',
            value: 'เขตพระนคร'
        },
        {
            text: 'เขตดุสิต',
            value: 'เขตดุสิต'
        },
        {
            text: 'เขตหนองจอก',
            value: 'เขตหนองจอก'
        },
        {
            text: 'เขตบางรัก',
            value: 'เขตบางรัก'
        },
        {
            text: 'เขตบางเขน',
            value: 'เขตบางเขน'
        },
        {
            text: 'เขตบางกะปิ',
            value: 'เขตบางกะปิ'
        },
        {
            text: 'เขตปทุมวัน',
            value: 'เขตปทุมวัน'
        },
        {
            text: 'เขตบางคอแหลม',
            value: 'เขตบางคอแหลม'
        },
        {
            text: 'อำเภอกระสัง',
            value: 'อำเภอกระสัง'
        },
        {
            text: 'อำเภอโพธาราม',
            value: 'อำเภอโพธาราม'
        },
        {
            text: 'เขตสาทร',
            value: 'เขตสาทร'
        },
        {
            text: 'อำเภอท่าม่วง',
            value: 'อำเภอท่าม่วง'
        }


    ]

    private provinceDataSource: SelectBox[] = [
        {
            text: 'กรุงเทพมหานคร',
            value: 'กรุงเทพมหานคร'
        },
        {
            text: 'จังหวัดสระบุรี',
            value: 'จังหวัดสระบุรี'
        },
        {
            text: 'จังหวัดชลบุรี',
            value: 'จังหวัดชลบุรี'
        },
        {
            text: 'จังหวัดระยอง',
            value: 'จังหวัดระยอง'
        },
        {
            text: 'จังหวัดจันทบุรี',
            value: 'จังหวัดจันทบุรี'
        },
        {
            text: 'จังหวัดตราด',
            value: 'จังหวัดตราด'
        },
        {
            text: 'จังหวัดฉะเชิงเทรา',
            value: 'จังหวัดฉะเชิงเทรา'
        },
        {
            text: 'จังหวัดบุรีรัมย์',
            value: 'จังหวัดบุรีรัมย์'
        },
        {
            text: 'จังหวัดราชบุรี',
            value: 'จังหวัดราชบุรี'
        },
        {
            text: 'จังหวัดนครปฐม',
            value: 'จังหวัดนครปฐม'
        },
        {
            text: 'จังหวัดกาญจนบุรี',
            value: 'จังหวัดกาญจนบุรี'
        }
        
    ]

    public getProvinceDataSource(): Observable<SelectBox[]> {
        return of(this.provinceDataSource);
    }

    public getDistrictDataSource(): Observable<SelectBox[]> {
        return of(this.districtDataSource);
    }
    public getCustomerDataSource(): Observable<SelectBox[]> {
        return of(this.customerDataSource);
    }
}
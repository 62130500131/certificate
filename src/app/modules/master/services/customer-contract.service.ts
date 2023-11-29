import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { AddCustomerContractParam, CustomerContractUploadViewModel, CustomerContractViewModel } from '../models/customer-contract.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerContractService {

    private import1: CustomerContractUploadViewModel[] = [
        {
            issue: ['Please Enter line.'],
            customerCode: '10000020',
            customerName: 'หจก. ชลบุรีเลิศทวีสตีลYYY',
            province: 'จังหวัดชลบุรี',
            district: 'อำเภอเมืองชลบุรี',
            line: ''
        },
        {
            issue: ['Please Enter Customer.'],
            customerCode: '',
            customerName: '',
            province: '',
            district: '',
            line: 'ABX-Steel'
        },
        {
            issue: ['Please Enter line.'],
            customerCode: '10000022',
            customerName: 'บริษัท กิจเจริญ (เจริญเมือง) จำกัดYYYYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตปทุมวัน',
            line: ''
        },
        {
            issue: ['Customer 10000023 is Duplicated'],
            customerCode: '10000023',
            customerName: 'บริษัท ช่องแสงโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: 'Metal_light_1975'
        },
        {
            issue: ['Customer 10000023 is Duplicated'],
            customerCode: '10000023',
            customerName: 'บริษัท ช่องแสงโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: 'Metal_light_1975'
        },
        {
            issue: [],
            customerCode: '10000030',
            customerName: 'บริษัท เดอะบีม เมทัล กรุ๊ป จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตพระโขนง',
            line: 'TheBeamMetal'
        },
        {
            issue: [],
            customerCode: '10000033',
            customerName: 'บริษัท เชื้อไพบูลย์สตีล จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางนา',
            line: 'Chuea_Phai_Bun'
        }
    ]

    private import2: CustomerContractUploadViewModel[] = [
        {
            issue: [],
            customerCode: '10000020',
            customerName: 'หจก. ชลบุรีเลิศทวีสตีลYYY',
            province: 'จังหวัดชลบุรี',
            district: 'อำเภอเมืองชลบุรี',
            line: 'Cl_Steel'
        },
        {
            issue: [],
            customerCode: '10000021',
            customerName: 'บริษัท อุดมโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตยานนาวา',
            line: 'Udom_Loha'
        },
        {
            issue: [],
            customerCode: '10000022',
            customerName: 'บริษัท กิจเจริญ (เจริญเมือง) จำกัดYYYYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตปทุมวัน',
            line: 'KitCharoen'
        },
        {
            issue: [],
            customerCode: '10000023',
            customerName: 'บริษัท ช่องแสงโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: 'Metal_light_1975'
        },
        {
            issue: [],
            customerCode: '10000030',
            customerName: 'บริษัท เดอะบีม เมทัล กรุ๊ป จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตพระโขนง',
            line: 'TheBeamMetal'
        },
        {
            issue: [],
            customerCode: '10000033',
            customerName: 'บริษัท เชื้อไพบูลย์สตีล จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางนา',
            line: 'Chuea_Phai_Bun'
        }
    ]

    private import3: CustomerContractUploadViewModel[] = [
        {
            issue: ['Please Enter line.'],
            customerCode: '10000020',
            customerName: 'หจก. ชลบุรีเลิศทวีสตีลYYY',
            province: 'จังหวัดชลบุรี',
            district: 'อำเภอเมืองชลบุรี',
            line: ''
        },
        {
            issue: ['Please Enter line.'],
            customerCode: '10000021',
            customerName: 'บริษัท อุดมโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตยานนาวา',
            line: ''
        },
        {
            issue: ['Please Enter line.'],
            customerCode: '10000022',
            customerName: 'บริษัท กิจเจริญ (เจริญเมือง) จำกัดYYYYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตปทุมวัน',
            line: ''
        },
        {
            issue: [],
            customerCode: '10000023',
            customerName: 'บริษัท ช่องแสงโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: 'Metal_light_1975'
        },
        {
            issue: [],
            customerCode: '10000030',
            customerName: 'บริษัท เดอะบีม เมทัล กรุ๊ป จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตพระโขนง',
            line: ''
        },
        {
            issue: [],
            customerCode: '10000033',
            customerName: 'บริษัท เชื้อไพบูลย์สตีล จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางนา',
            line: ''
        }
    ]

    private confirmImportResult: CustomerContractViewModel[] = [
        {
            customerCode: '10000020',
            customerName: 'หจก. ชลบุรีเลิศทวีสตีลYYY',
            province: 'จังหวัดชลบุรี',
            district: 'อำเภอเมืองชลบุรี',
            line: 'Cl_Steel',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000021',
            customerName: 'บริษัท อุดมโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตยานนาวา',
            line: 'Udom_Loha',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000022',
            customerName: 'บริษัท กิจเจริญ (เจริญเมือง) จำกัดYYYYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตปทุมวัน',
            line: 'KitCharoen',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000023',
            customerName: 'บริษัท ช่องแสงโลหะกิจ (1975) จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: 'Metal_light_1975',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '034-665-952'
        },
        {
            customerCode: '10000030',
            customerName: 'บริษัท เดอะบีม เมทัล กรุ๊ป จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตพระโขนง',
            line: 'TheBeamMetal',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-9512'
        },
        {
            customerCode: '10000033',
            customerName: 'บริษัท เชื้อไพบูลย์สตีล จำกัดYYY',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางนา',
            line: 'Chuea_Phai_Bun',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        }

    ]

    private customerContractData: CustomerContractViewModel[] = [

        {
            customerCode: '10000001',
            customerName: 'บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '',
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000002',
            customerName: 'บริษัท เอ.เอ็น.สตีล จำกัด',
            province: 'จังหวัดบุรีรัมย์',
            district: 'อำเภอกระสัง',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '',
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000003',
            customerName: 'บริษัท ป้อเจริญค้าวัสดุ จำกัด',
            province: 'จังหวัดราชบุรี',
            district: 'อำเภอโพธาราม',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000004',
            customerName: 'บริษัท ไททัน สตีล จำกัด',
            province: 'จังหวัดนครปฐม',
            district: '',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000005',
            customerName: 'บริษัท ซี.เค.เอส. โลหะกิจ จำกัด',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '10000006',
            customerName: 'บริษัท สินกิจไพบูลย์โลหะการ จำกัด',
            province: 'กรุงเทพมหานคร',
            district: 'เขตสาทร',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '90010003',
            customerName: 'Ship to บริษัท เอเซี่ยนสติลโปรดักส์ จำกัด',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '90010007',
            customerName: 'Ship to หจก. สัมพันธ์วัสดุก่อสร้าง',
            province: 'กรุงเทพมหานคร',
            district: 'เขตบางคอแหลม',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'
        },
        {
            customerCode: '90010054',
            customerName: 'Ship to - ไทยวัสดุ กาญ',
            province: 'จังหวัดกาญจนบุรี',
            district: 'อำเภอท่าม่วง',
            line: '',
            modifiedBy: 'Connex',
            modifiedTime: (new Date()).toString(),
            contactName: '', 
            contactTel: '084-665-6912'

        }
    ]
    // constructor(private http: HttpClient, @Inject('BASE_API') private baseAPI: string) {

    // }

    public importCustomerContract(fileName: string): Observable<CustomerContractUploadViewModel[]> {
        if (fileName === 'Import1.xlsx') {
            return of(this.import1);
        }
        else if (fileName === 'Import2.xlsx') {
            return of(this.import2);
        }
        else {
            return of(this.import3);
        }
    }

    public confirmImportCustomerContract(): Observable<CustomerContractViewModel[]> {
        return of(this.confirmImportResult);
    }

    public initial(): Observable<CustomerContractViewModel[]> {
        return of(this.customerContractData);
    }

    public editCustomerContact(param: AddCustomerContractParam): Observable<void> {

        this.customerContractData.forEach(x => {
            if (x.customerCode == param.customerCode) {
                x.customerCode = param.customerCode,
                    x.district = param.district,
                    x.province = param.province,
                    x.contactName = param.contactName,
                    x.customerName = param.customerName,
                    x.line = param.line,
                    x.modifiedBy = 'Connex',
                    x.modifiedTime = (new Date()).toString()
            }

        })
        return of()
    }

}
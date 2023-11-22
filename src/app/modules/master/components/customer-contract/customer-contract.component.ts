import { Component, OnInit } from '@angular/core';
import { CustomerContractViewModel } from '../../models/customer-contract.model';

@Component({
  selector: 'app-customer-contract',
  templateUrl: './customer-contract.component.html',
  styleUrls: ['./customer-contract.component.css']
})
export class CustomerContractComponent implements OnInit {

  public dataSource: CustomerContractViewModel[] = [
    {
      customerCode: '10000001',
      customerName: 'บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน',
      province: 'กรุงเทพมหานคร',
      district: 'เขตบางคอแหลม',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000002',
      customerName: 'บริษัท เอ.เอ็น.สตีล จำกัด',
      province: 'จังหวัดบุรีรัมย์',
      district: 'อำเภอกระสัง',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000003',
      customerName: 'บริษัท ป้อเจริญค้าวัสดุ จำกัด',
      province: 'จังหวัดราชบุรี',
      district: 'อำเภอโพธาราม',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000004',
      customerName: 'บริษัท ไททัน สตีล จำกัด',
      province: 'จังหวัดนครปฐม',
      district: '',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000005',
      customerName: 'บริษัท ซี.เค.เอส. โลหะกิจ จำกัด',
      province: 'กรุงเทพมหานคร',
      district: 'เขตบางคอแหลม',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000006',
      customerName: 'บริษัท สินกิจไพบูลย์โลหะการ จำกัด',
      province: 'กรุงเทพมหานคร',
      district: 'เขตสาทร',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { certificateListViewModel, searchParamCertificateList } from '../../models/certificate-list.model';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent {
  public searchParam: searchParamCertificateList = new searchParamCertificateList();
  public list: certificateListViewModel[] = [
    {
      certNo: "42523050483",
      mill: "SSI",
      totalMaterial: 10,
      certDate: new Date(),
      uploadDate: new Date(),
      modifiedBy: "Connex",
      modifiedTime: new Date(),
      dataSource: [
        {
        material : '2CTFB',
        materialDesc : 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
        grade : 'SS400',
        heatNo : 'DB10177',
        quantity : 8,
        unit: 'PC'
        },
        {
          material : '2CTFB020-0060-1180',
          materialDesc : 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
          grade : 'SS400',
          heatNo : 'DB10178',
          quantity : 2,
          unit: 'PC'
          }
      ]
    },
    {
      certNo: "42523050484",
      mill: "GJS",
      totalMaterial: 20,
      certDate: new Date(),
      uploadDate: new Date(),
      modifiedBy: "Connex",
      modifiedTime: new Date(),
      dataSource: []
    },
    {
      certNo: "42523050496",
      mill: "GJ",
      totalMaterial: 2,
      certDate: new Date(),
      uploadDate: new Date(),
      modifiedBy: "Connex",
      modifiedTime: new Date(),
      dataSource: []
    }
  ];

  constructor(){

  }

  public onClickSearch():void {

  }

  public onClickClear():void {

  }

}

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
      dataSource: []
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

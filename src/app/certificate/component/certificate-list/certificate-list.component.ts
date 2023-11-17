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
      certDate: Date.now().toString(),
      uploadDate: Date.now().toString(),
      modifiedBy: "weeraphon",
      modifiedTime: Date.now().toString()
    }
  ];

  constructor(){

  }

  public onClickSearch():void {

  }

  public onClickClear():void {

  }

}

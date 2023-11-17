import { Component } from '@angular/core';
import { searchParamCertificateList } from '../../models/certificate-list.model';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent {
  public searchParam: searchParamCertificateList = new searchParamCertificateList();


  constructor(){

  }

  public onClickSearch():void {

  }

  public onClickClear():void {

  }

}

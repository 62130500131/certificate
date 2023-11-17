import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'certificate-list-detail',
  templateUrl: './certificate-list-detail.component.html',
  styleUrls: ['./certificate-list-detail.component.css']
})
export class CertificateListDetailComponent implements OnInit {

  @Input('dataSource') dataSource: any;
  constructor() { }

  ngOnInit() {
  }

}

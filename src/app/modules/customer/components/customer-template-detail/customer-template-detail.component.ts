import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-template-detail',
  templateUrl: './customer-template-detail.component.html',
})
export class CustomerTemplateDetailComponent implements OnInit {

  @Input('dataSource') dataSource: any;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'customer-template-item-detail',
  templateUrl: './customer-template-item-detail.component.html'
})
export class CustomerTemplateItemDetailComponent implements OnInit {

  @Input('dataSource') dataSource: any;

  constructor() { }

  ngOnInit() {
  }

  public onClickDownload(): void {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Download Success!",
      heightAuto: false,
      showConfirmButton: false,
      timer: 1500
    });
  }
}

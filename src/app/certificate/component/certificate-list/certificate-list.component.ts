import { Component, TemplateRef, ViewChild } from '@angular/core';
import { certificateListViewModel, searchParamCertificateList } from '../../models/certificate-list.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent {
  @ViewChild('importTemplate') importTemplate!: TemplateRef<any>;
  public searchParam: searchParamCertificateList = new searchParamCertificateList();
  public modalRef!: BsModalRef;
  public fileToUpload: any;
  public materialDataSource = [
    {
      text: '2CTFB : เหล็กแผ่นดำ ตัดซอยตามขนาด',
      value: '2CTFB'
    }
  ];
  public gradeDataSource = [
    {
      text: 'SS400',
      value: 'SS400'
    }
  ];
  public millDataSource = [
    {
      text: 'SSI',
      value: 'SSI'
    },
    {
      text: 'GJ',
      value: 'GJ'
    },
    {
      text: 'GJS',
      value: 'GJS'
    },
    {
      text: 'SYS',
      value: 'SYS'
    },

  ];
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
          material: '2CTFB',
          materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
          grade: 'SS400',
          heatNo: 'DB10177',
          quantity: 8,
          unit: 'PC'
        },
        {
          material: '2CTFB020-0060-1180',
          materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
          grade: 'SS400',
          heatNo: 'DB10178',
          quantity: 2,
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
      dataSource: [
        {
          material: '2CTFB',
          materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
          grade: 'SS400',
          heatNo: 'DB10177',
          quantity: 8,
          unit: 'PC'
        },
        {
          material: '2CTFB020-0060-1180',
          materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
          grade: 'SS400',
          heatNo: 'DB10178',
          quantity: 12,
          unit: 'PC'
        }
      ]
    },
    {
      certNo: "42523050496",
      mill: "GJ",
      totalMaterial: 2,
      certDate: new Date(),
      uploadDate: new Date(),
      modifiedBy: "Connex",
      modifiedTime: new Date(),
      dataSource: [
        {
          material: '2CTFB020-0060-1180',
          materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
          grade: 'SS400',
          heatNo: 'DB10178',
          quantity: 2,
          unit: 'PC'
        }
      ]
    }
  ];

  constructor(private modalService: BsModalService,
              private router: Router) {

  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public onClickSearch(): void {

  }

  public onClickClear(): void {
    this.searchParam = new searchParamCertificateList();
  }

  public onClickCertNo():void {
    this.router.navigate(['certificate-entry']);
  }

  public onClickUpload(): void {
    this.modalRef = this.modalService.show(this.importTemplate, {
      class: 'modal-lg'
    })
  }

  public onClickConfirmUpload():void{
    this.router.navigate(['certificate-entry']);
    this.modalRef.hide();
  }

}

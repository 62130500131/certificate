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
  public param: searchParamCertificateList = new searchParamCertificateList();
  public modalRef!: BsModalRef;
  public fileToUpload: any;
  public millForUpload: string = '';
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
    },
    {
      text: 'SS490',
      value: 'SS490'
    },
    {
      text: 'SM490YA',
      value: 'SM490YA'
    },
    {
      text: 'SM490A',
      value: 'SM490A'
    },
    {
      text: 'SM400',
      value: 'SM400'
    },
    {
      text: 'S275JR',
      value: 'S275JR'
    },
    {
      text: 'S335JR',
      value: 'S335JR'
    },
    {
      text: 'HR-1',
      value: 'HR-1'
    },
    {
      text: 'SPHC',
      value: 'SPHC'
    },
    {
      text: 'A36',
      value: 'A36'
    },
    {
      text: 'A516',
      value: 'A516'
    },
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
      text: 'SYS',
      value: 'SYS'
    },
    {
      text: 'FMS',
      value: 'FMS'
    },
    {
      text: 'Posco',
      value: 'Posco'
    },
    {
      text: 'SPM',
      value: 'SPM'
    },
    {
      text: 'Other',
      value: 'Other'
    }


  ];
  public list: certificateListViewModel[] = [
    {
      certNo: "42523050482",
      mill: "SYS",
      totalMaterial: 80,
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
          quantity: 20,
          unit: 'PC'
        },
        {
          material: '2CTFB020-0060-1180',
          materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
          grade: 'SS400',
          heatNo: 'DB10177',
          quantity: 20,
          unit: 'PC'
        },
        {
          material: '2CTFB020-0818-2128',
          materialDesc: 'เหล็กแผ่นดำ 2.00 x 818 x 2128 mm SS400',
          grade: 'SS400',
          heatNo: 'DB10177',
          quantity: 20,
          unit: 'PC'
        },
        {
          material: '2CTFB020-0820-1762',
          materialDesc: 'เหล็กแผ่นดำ 2.00 x 820 x 1762 mm SS400',
          grade: 'SS400',
          heatNo: 'DB10177',
          quantity: 20,
          unit: 'PC'
        }
      ]
    },
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

  public dateDataSource: any[] = [
    {
      text: 'ภายใน 90 วัน',
      value: 90
    },
    {
      text: 'ภายใน 60 วัน',
      value: 60
    },
    {
      text: 'ภายใน 30 วัน',
      value: 30
    },
    {
      text: 'ภายใน 7 วัน',
      value: 7
    },
    {
      text: 'ระบุเอง',
      value: 0
    }
  ]

  constructor(private modalService: BsModalService,
              private router: Router) {

  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public onClickSearch(): void {

  }

  public onClickClear(): void {
    this.param= new searchParamCertificateList();
  }

  public onClickCertNo():void {
    this.router.navigate(['certificate-entry']);
  }

  public onClickUpload(): void {
    this.millForUpload = '';
    this.modalRef = this.modalService.show(this.importTemplate, {
      class: 'modal-lg'
    })
  }

  public onClickConfirmUpload():void{
    this.router.navigate(['certificate-entry']);
    this.modalRef.hide();
  }

  public onUploadDateRangeChanged(event: any):void{

  }

  public onCertDateRangeChanged(event: any):void{

  }

}

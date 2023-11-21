import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateEntryListViewModel } from 'src/app/certificate/models/certificate-list.model';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'nac-certificate-entry',
  templateUrl: './nac-certificate-entry.component.html',
  styleUrls: ['./nac-certificate-entry.component.css']
})
export class NacCertificateEntryComponent implements OnInit {

  public today = '20-Nov-2023';
  public list: CertificateEntryListViewModel[] = [{
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  }, {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  }];
  constructor(private router: Router,
    private pdfService: NgxExtendedPdfViewerService) { }

  ngOnInit() {
  }

  public onClickExit(): void {
    this.router.navigate(['certificate-list']);
  }

  public onClickSave(): void {
    this.router.navigate(['certificate-list']);
  }

}

  

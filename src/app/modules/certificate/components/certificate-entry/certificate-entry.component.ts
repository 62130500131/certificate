import { Component, OnInit } from '@angular/core';
import { CertificateEntryListViewModel } from '../../models/certificate-list.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-certificate-entry',
  templateUrl: './certificate-entry.component.html',
  styleUrls: ['./certificate-entry.component.css']
})
export class CertificateEntryComponent implements OnInit {

  public src = '/assets/pdfs/20.pdf'
  // public src = 'https://webcert.siamyamato.com/webcert/ViewPDF.aspx?certNo=y6frUhKCC2N2ky7j5AGPeA%3d%3d'
  public today = (new Date()).toString();
  public isEdit: boolean = false;
  public certNo: any = "";
  public certDate: string = (new Date()).toString();
  public list: CertificateEntryListViewModel[] = [{
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: 'Kg.',
    yield: '250',
    tensile: '56',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    yield: '250',
    unit: 'Kg.',
    tensile: '56',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: 'Kg.',
    yield: '250',
    tensile: '56',
    remark: '',
  }, {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    yield: '250',
    unit: 'Kg.',
    tensile: '56',
    remark: '',
  }];
  constructor(private router: Router) { 
    this.isEdit = router.url.includes('certificate-edit');
    const split = router.url.split("/");
    this.certNo = split[split.length - 1]
  }

  ngOnInit() {
  }

  public onClickExit(): void {
    this.router.navigate(['certificate-list']);
  }

  public onClickSave(): void {
    this.router.navigate(['certificate-list']);
  }

  public onClickDelete(): void {
    confirm("Are you sure you want to delete this item?");
  }

}

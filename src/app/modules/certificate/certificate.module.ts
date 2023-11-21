import { NgModule } from '@angular/core';
import * as comps from './components';
@NgModule({
    declarations: [
        comps.CertificateEntryComponent,
        comps.CertificateListComponent,
        comps.CertificateListDetailComponent
    ],
    imports: [
    ]
  })
  export class CertificateModule { }
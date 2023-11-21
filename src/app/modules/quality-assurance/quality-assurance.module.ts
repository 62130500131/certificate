import { NgModule } from '@angular/core';
import * as comps from './components';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [
        comps.NacCertificateEntryComponent,
        comps.QualityAssuranceStatusComponent
    ],
    imports: [
        SharedModule,
    ]
  })
  export class QualityAssuranceModule { }
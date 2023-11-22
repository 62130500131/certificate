import { NgModule } from '@angular/core';
import * as comps from './components';
import { SharedModule } from '../shared/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@NgModule({
    declarations: [
        comps.NacCertificateEntryComponent,
        comps.QualityAssuranceStatusComponent,
    ],
    imports: [
        SharedModule,
        NgxExtendedPdfViewerModule
    ]
  })
  export class QualityAssuranceModule { }
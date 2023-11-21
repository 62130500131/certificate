import { NgModule } from '@angular/core';
import * as comps from './components';
import { SharedModule } from '../shared/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from '../shared/common/components/example-pdf-viewer/example-pdf-viewer.component';
@NgModule({
    declarations: [
        comps.CertificateEntryComponent,
        comps.CertificateListComponent,
        comps.CertificateListDetailComponent,
    ],
    imports: [
        SharedModule,
        NgxExtendedPdfViewerModule,
    ]
  })
export class CertificateModule { }
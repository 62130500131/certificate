import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { CustomerPageComponent } from './customer/components/customer-page/customer-page.component';
import { MappingMaterialComponent } from './master/components/mapping-material/mapping-material.component';
import { CertificateListComponent } from './certificate/components/certificate-list/certificate-list.component';
import { DoPageComponent } from './map-do/components/do-page/do-page.component';
import { CertificateEntryComponent } from './certificate/components/certificate-entry/certificate-entry.component';
import { DoShipmentEntryComponent } from './map-do/components/do-shipment-entry/do-shipment-entry.component';
import { NacCertificateEntryComponent } from './nac-certificate/nac-certificate-entry/nac-certificate-entry.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'customer-entry', component: CustomerPageComponent },
  { path: 'mapping-material', component: MappingMaterialComponent },
  { path: 'certificate-list', component: CertificateListComponent },
  { path: 'do-page', component: DoPageComponent },
  { path: 'do-entry', component: DoShipmentEntryComponent },
  { path: 'certificate-entry', component: CertificateEntryComponent },
  { path: 'nac-certificate-entry', component: NacCertificateEntryComponent },
  { path: 'pdf', component: ExamplePdfViewerComponent },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

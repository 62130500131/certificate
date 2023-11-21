import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'login-page', component: LoginPageComponent },
//   { path: 'customer-entry', component: CustomerPageComponent },
//   { path: 'mapping-material', component: MappingMaterialComponent },
//   { path: 'certificate-list', component: CertificateListComponent },
//   { path: 'do-page', component: DoPageComponent },
//   { path: 'do-entry', component: DoShipmentEntryComponent },
//   { path: 'certificate-entry', component: CertificateEntryComponent },
//   { path: 'nac-certificate-entry', component: NacCertificateEntryComponent },
//   { path: 'pdf', component: ExamplePdfViewerComponent },
//   {
//     path: '',
//     redirectTo: 'login-page',
//     pathMatch: 'full'
//   },

// ];
const routes: Routes = [
  {
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

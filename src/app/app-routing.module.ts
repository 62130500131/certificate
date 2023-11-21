import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/core/components';
import { CustomerPageComponent } from './modules/customer/components';
import { MappingMaterialComponent } from './modules/master/components';
import { CertificateEntryComponent, CertificateListComponent } from './modules/certificate/components';
import { DoPageComponent, DoShipmentEntryComponent } from './modules/map-certificate/components';
import { NacCertificateEntryComponent } from './modules/quality-assurance/components';
import { ExamplePdfViewerComponent } from './modules/shared/common/components/example-pdf-viewer/example-pdf-viewer.component';

const routes: Routes = [
  {
    path: 'login-page', component: LoginPageComponent,
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'customer-entry', component: CustomerPageComponent,
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
     path: 'mapping-material', component: MappingMaterialComponent,
     loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule)
  },
  { 
    path: 'certificate-list', component: CertificateListComponent,
    loadChildren: () => import('./modules/certificate/certificate.module').then(m => m.CertificateModule)
  },
  { 
    path: 'do-page', component: DoPageComponent, 
    loadChildren: () => import('./modules/map-certificate/map-certificate.module').then(m => m.MapCertificateModule)
  },
  { 
    path: 'do-entry', component: DoShipmentEntryComponent,
    loadChildren: () => import('./modules/map-certificate/map-certificate.module').then(m => m.MapCertificateModule)
  },
  { 
    path: 'certificate-entry', component: CertificateEntryComponent,
    loadChildren: () => import('./modules/certificate/certificate.module').then(m => m.CertificateModule) 
  },
  { 
    path: 'nac-certificate-entry', component: NacCertificateEntryComponent,
    loadChildren: () => import('./modules/quality-assurance/quality-assurance.module').then(m => m.QualityAssuranceModule) 
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

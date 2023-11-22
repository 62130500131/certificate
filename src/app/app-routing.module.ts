import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/core/components';
import { CustomerPageComponent } from './modules/customer/components';
import { CustomerContractComponent, MappingMaterialComponent } from './modules/master/components';
import { CertificateEntryComponent, CertificateListComponent } from './modules/certificate/components';
import { DoPageComponent, DoShipmentEntryComponent } from './modules/map-certificate/components';
import { NacCertificateEntryComponent, QualityAssuranceStatusComponent } from './modules/quality-assurance/components';
import { ExamplePdfViewerComponent } from './modules/shared/common/components/example-pdf-viewer/example-pdf-viewer.component';
import { ProductionStatusComponent } from './modules/production/components/production-status/production-status.component';

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
    path: 'quality-assurance-status', component: QualityAssuranceStatusComponent,
    loadChildren: () => import('./modules/quality-assurance/quality-assurance.module').then(m => m.QualityAssuranceModule) 
  },
  { 
    path: 'customer-contract', component: CustomerContractComponent,
    loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule) 
  },
  { 
    path: 'production-status', component: ProductionStatusComponent,
    loadChildren: () => import('./modules/production/production.module').then(m => m.ProductionModule) 
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

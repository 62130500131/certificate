import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/core/components';
import { CustomerPageComponent, CustomerTemplateComponent } from './modules/customer/components';
import { CustomerContractComponent, MappingMaterialComponent, MasterMillComponent, SyncDataComponent } from './modules/master/components';
import { CertificateEntryComponent, CertificateListComponent } from './modules/certificate/components';
import { DoPageComponent, DoShipmentEntryComponent } from './modules/map-certificate/components';
import { NacCertificateEntryComponent, QualityAssuranceStatusComponent } from './modules/quality-assurance/components';
import { ExamplePdfViewerComponent } from './modules/shared/common/components/example-pdf-viewer/example-pdf-viewer.component';
import { ProductionStatusComponent } from './modules/production/components/production-status/production-status.component';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';

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
    path: 'mapping-certificate', component: DoPageComponent,
    loadChildren: () => import('./modules/map-certificate/map-certificate.module').then(m => m.MapCertificateModule)
  },
  {
    path: 'do-entry/:shipment/:shipTo', component: DoShipmentEntryComponent,
    loadChildren: () => import('./modules/map-certificate/map-certificate.module').then(m => m.MapCertificateModule)
  },
  {
    path: 'certificate-entry/:guid', component: CertificateEntryComponent,
    loadChildren: () => import('./modules/certificate/certificate.module').then(m => m.CertificateModule)
  },
  {
    path: 'certificate-edit/:id/:guid', component: CertificateEntryComponent,
    loadChildren: () => import('./modules/certificate/certificate.module').then(m => m.CertificateModule)
  },
  {
    path: 'nac-certificate-entry', component: NacCertificateEntryComponent,
    loadChildren: () => import('./modules/quality-assurance/quality-assurance.module').then(m => m.QualityAssuranceModule)
  },
  {
    path: 'nac-certificate-view', component: NacCertificateEntryComponent,
    data: {
      isView: false
    },
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
    path: 'production-order-list', component: ProductionStatusComponent,
    loadChildren: () => import('./modules/production/production.module').then(m => m.ProductionModule)
  },
  {
    path: 'sync-data', component: SyncDataComponent,
    loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'customer-page', component: CustomerTemplateComponent,
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'master-mill', component: MasterMillComponent,
    loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule)
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
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

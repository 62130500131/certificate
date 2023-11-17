import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/component/login-page/login-page.component';
import { CustomerPageComponent } from './customer/component/customer-page/customer-page.component';
import { MappingMaterialComponent } from './master/component/mapping-material/mapping-material.component';
import { CertificateListComponent } from './certificate/component/certificate-list/certificate-list.component';
import { DoPageComponent } from './map-do/component/do-page/do-page.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'customer-entry', component: CustomerPageComponent },
  { path: 'mapping-material', component: MappingMaterialComponent },
  { path: 'certificate-list', component: CertificateListComponent },
  { path: 'do-page', component: DoPageComponent },
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

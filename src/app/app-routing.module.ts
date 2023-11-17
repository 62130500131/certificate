import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/component/login-page/login-page.component';
import { CustomerPageComponent } from './customer/component/customer-page/customer-page.component';
import { CertificateListComponent } from './certificate/component/certificate-list/certificate-list.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'customer-entry', component: CustomerPageComponent },
  { path: 'certificate-list', component: CertificateListComponent },
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

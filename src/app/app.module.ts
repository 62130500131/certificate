import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/component/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { CustomerPageComponent } from './customer/component/customer-page/customer-page.component';
import { CertificateListComponent } from './certificate/component/certificate-list/certificate-list.component';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CustomerPageComponent,
    CertificateListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DxDataGridComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

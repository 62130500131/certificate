import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/component/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { CustomerPageComponent } from './customer/component/customer-page/customer-page.component';
import { MappingMaterialComponent } from './master/component/mapping-material/mapping-material.component';
import { CertificateListComponent } from './certificate/component/certificate-list/certificate-list.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { CertificateListDetailComponent } from './certificate/component/certificate-list-detail/certificate-list-detail.component';
import { DoPageComponent } from './map-do/component/do-page/do-page.component';
import { DoShipmentEntryComponent } from './map-do/component/do-shipment-entry/do-shipment-entry.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { CertificateEntryComponent } from './certificate/component/certificate-entry/certificate-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CustomerPageComponent,
    MappingMaterialComponent,
    CertificateListComponent,
    CertificateListDetailComponent,
    DoPageComponent,
    DoShipmentEntryComponent,
    CertificateEntryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

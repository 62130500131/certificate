import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { CustomerPageComponent } from './customer/components/customer-page/customer-page.component';
import { MappingMaterialComponent } from './master/components/mapping-material/mapping-material.component';
import { CertificateListComponent } from './certificate/components/certificate-list/certificate-list.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { CertificateListDetailComponent } from './certificate/components/certificate-list-detail/certificate-list-detail.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { CertificateEntryComponent } from './certificate/components/certificate-entry/certificate-entry.component';
import { NavBarComponent } from './shared/common/components/nav-bar/nav-bar.component';
import { ExamplePdfViewerComponent } from './shared/common/components/example-pdf-viewer/example-pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DoPageComponent } from './map-certificate/components/do-page/do-page.component';
import { DoShipmentEntryComponent } from './map-certificate/components/do-shipment-entry/do-shipment-entry.component';

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
    CertificateEntryComponent,
    NavBarComponent,
    ExamplePdfViewerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    ModalModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

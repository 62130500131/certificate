import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/component/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { CustomerPageComponent } from './customer/component/customer-page/customer-page.component';
import { MappingMaterialComponent } from './master/component/mapping-material/mapping-material.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CustomerPageComponent,
    MappingMaterialComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

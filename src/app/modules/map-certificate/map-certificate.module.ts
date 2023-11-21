import { NgModule } from '@angular/core';
import * as comps from './components';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        comps.DoPageComponent,
        comps.DoShipmentEntryComponent
    ],
    imports: [
        SharedModule
    ]
  })
  export class MapCertificateModule { }
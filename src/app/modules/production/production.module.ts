import { NgModule } from '@angular/core';
import * as comps from './components';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        comps.ProductionStatusComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ProductionModule { }
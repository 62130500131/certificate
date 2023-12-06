import { NgModule } from '@angular/core';
import * as comps from './components';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [
        comps.MappingMaterialComponent,
        comps.CustomerContractComponent,
        comps.SyncDataComponent,
        comps.MasterMillComponent
    ],
    imports: [
        SharedModule
    ]
})
export class MasterModule { }
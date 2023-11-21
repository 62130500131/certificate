import { NgModule } from '@angular/core';
import * as comps from './components';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        comps.LoginPageComponent,
        comps.NavBarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        comps.LoginPageComponent,
        comps.NavBarComponent
    ]
})
export class CoreModule { }
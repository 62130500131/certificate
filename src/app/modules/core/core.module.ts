import { NgModule } from '@angular/core';
import * as comps from './components';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        comps.LoginPageComponent,
        comps.NavBarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        comps.LoginPageComponent,
        comps.NavBarComponent
    ]
})
export class CoreModule { }
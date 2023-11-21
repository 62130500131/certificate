import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './common/components/example-pdf-viewer/example-pdf-viewer.component';
@NgModule({
    declarations: [
        ExamplePdfViewerComponent
    ],
    imports: [
        FormsModule,
        DxDataGridModule,
        DxSelectBoxModule,
        CommonModule,
        ReactiveFormsModule,
        NgxExtendedPdfViewerModule
    ],
    exports: [
        FormsModule,
        DxDataGridModule,
        DxSelectBoxModule,
        CommonModule,
        ReactiveFormsModule,
        ExamplePdfViewerComponent
        // NgxExtendedPdfViewerModule,
    ]
})
export class SharedModule { }
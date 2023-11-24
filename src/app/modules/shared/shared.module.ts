import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './common/components/example-pdf-viewer/example-pdf-viewer.component';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DatePickerComponent } from './common/date-picker/date-picker/date-picker.component';
import { DateRangeComponent } from './common/date-range/date-range/date-range.component';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
    declarations: [
        ExamplePdfViewerComponent,
        DatePickerComponent,
        DateRangeComponent
    ],
    imports: [
        FormsModule,
        DxDataGridModule,
        DxSelectBoxModule,
        CommonModule,
        ReactiveFormsModule,
        NgxExtendedPdfViewerModule,
        DxDateBoxModule,
        DxCheckBoxModule,
        SweetAlert2Module
    ],
    providers: [
        DatePipe
    ],
    exports: [
        FormsModule,
        DxDataGridModule,
        DxSelectBoxModule,
        CommonModule,
        ReactiveFormsModule,
        ExamplePdfViewerComponent,
        DxDateBoxModule,
        DatePickerComponent,
        DateRangeComponent,
        DatePipe,
        DxCheckBoxModule,
        SweetAlert2Module
        // NgxExtendedPdfViewerModule,
    ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './common/components/example-pdf-viewer/example-pdf-viewer.component';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DatePickerComponent } from './common/date-picker/date-picker/date-picker.component';
import { DateRangeComponent } from './common/date-range/date-range/date-range.component';
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
        DxDateBoxModule
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
        DateRangeComponent
        // NgxExtendedPdfViewerModule,
    ]
})
export class SharedModule { }
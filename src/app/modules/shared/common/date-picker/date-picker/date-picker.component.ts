import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DxDateBoxComponent } from 'devextreme-angular/ui/date-box';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent {
  @ViewChild('date') date!: DxDateBoxComponent;
  @Input() name!: string;
  @Input() displayFormat: string = 'dd-MMM-yyyy';
  @Input() dateSerializationFormat: string = 'yyyy-MM-dd';
  @Input() type: string = 'date';
  @Input() pickerType: string = 'calendar';
  @Input('value') mValue: any;
  @Input() disabled: boolean = false;
  @Input() max!: string;
  @Input() min!: string;
  @Input() paddingLeft: number = 15;
  @Input('allow-empty') allowEmpty: boolean = true;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Input() defaultDate: any;
  @ViewChild('datebox') datebox: any;
  @Input() isFixWidth: boolean = true;


  public dateChange($event: any) {
    let value = $event.value;
    this.onUpdate.emit({ value });
  }

}

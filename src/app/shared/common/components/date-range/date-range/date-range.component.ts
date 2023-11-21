import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DateRangeConfig } from '../../helper/date-range.helper';

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styles: [
    ` .period{
        margin-top: 6px;
        width: 15px;
        text-align: center;
      }
    `
  ]
})
export class DateRangeComponent implements OnInit, OnChanges {
  
  @Input() name!: string;
  public isCompare: boolean = false;
  @Input('start-date') startDate: Date | string | null = null;
  @Input('end-date') endDate: Date | string | null = null;
  @Input('per-start-date') preStartDate: Date | string | null = null;
  @Input('per-end-date') preEndDate: Date | string | null = null;
  @Input('disabledStart') disabledStart: boolean = false;
  @Input('disabledEnd') disabledEnd: boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('showCompare') showCompare: boolean = false;
  @Output('onUpdate') updateData: EventEmitter<any> = new EventEmitter();
  public minEndDate: any;

  constructor(private _datePipe: DatePipe) {

  }

  public dateRangeConfig = new DateRangeConfig();
  public ngOnInit(): void {
    this.dateRangeConfig = new DateRangeConfig({
      startDate: this.startDate,
      endDate: this.endDate
    });
    this.isCompare = !((this.preStartDate == this.startDate) && (this.preEndDate == this.endDate))
    if (this.disabledStart)
      this.minEndDate = new Date;
  }

  public onStartDateChanged($event: any) {
    this.dateRangeConfig.onStartDateChanged($event.value);
    this.update();
  }
  
  public onEndDateChanged($event: any) {
    this.dateRangeConfig.onEndDateChanged($event.value);
    this.update();
  }

  private update() {
    this.startDate = this.dateRangeConfig.startDate;
    this.endDate = this.dateRangeConfig.endDate;
    this.updateData.emit({
      value: {
        startDate: this.startDate,
        endDate: this.endDate
      }
    });
  }
  
  public ngOnChanges(changes: SimpleChanges): void {
    let changeStartDate = changes['startDate'];
    let changeEndDate = changes['endDate'];
    if ((!!changeStartDate && !changeStartDate.firstChange) || (!!changeEndDate && !changeEndDate.firstChange)) {
      this.preStartDate = this._datePipe.transform(this.preStartDate, 'yyyy-MM-dd');
      this.preEndDate = this._datePipe.transform(this.preEndDate, 'yyyy-MM-dd');
      let startDate = this._datePipe.transform(this.startDate, 'yyyy-MM-dd');
      let endDate = this._datePipe.transform(this.endDate, 'yyyy-MM-dd');
      this.isCompare = !((this.preStartDate == startDate) && (this.preEndDate == endDate))
    }
  }
}

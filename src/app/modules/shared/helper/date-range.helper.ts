import * as moment from 'moment';
export interface DateRange {
    startDate: Date | string | null
    endDate: Date | string | null;
}
export class DateRangeConfig {
    public startDate: Date | string | null;
    public endDate: Date | string | null;
    public model!: DateRange | null | undefined;
    constructor(option?: DateRange) {
        this.startDate = option ? option.startDate ? option.startDate : null : null;
        this.endDate = option ? option.startDate ? option.endDate : null : null;
    }

    public getValue() {
        return {
            startDate: this.startDate,
            endDate: this.endDate
        }
    }

    public setValue(model: DateRange) {
        model['startDate'] = this.startDate;
        model['endDate'] = this.endDate;
    }

    public onStartDateChanged(startDate: Date) {
        this.startDate = startDate;
        if (!startDate)
            return;

        if (moment(startDate).isAfter(this.endDate, 'day') || !this.endDate)
            this.endDate = startDate;

    }

    public onEndDateChanged(endDate: Date) {
        this.endDate = endDate;
        if (!endDate)
            return;
        if (moment(this.startDate).isAfter(endDate, 'day') || !this.startDate)
            this.startDate = endDate;
    }

    public onLockDateChanged(endDate: Date) {
        if (!endDate)
            return;
        if (moment(this.startDate).isAfter(endDate, 'day'))
            this.endDate = this.startDate;
        else
            this.endDate = endDate;
    }
}
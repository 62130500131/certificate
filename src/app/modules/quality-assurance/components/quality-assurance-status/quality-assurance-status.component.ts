import { Component, OnInit } from '@angular/core';
import { QaStatusMonitorViewModel, QaStatusSearchParam } from '../../models/qa-status.model';

@Component({
  selector: 'qa-status',
  templateUrl: './quality-assurance-status.component.html',
  styleUrls: ['./quality-assurance-status.component.css']
})
export class QualityAssuranceStatusComponent implements OnInit {

   public param: QaStatusSearchParam = new QaStatusSearchParam();

   public data: QaStatusMonitorViewModel[] = []

  public dateDataSource: any[] = [
    {
      text: 'ภายใน 90 วัน',
      value: 90
    },
    {
      text: 'ภายใน 60 วัน',
      value: 60
    },
    {
      text: 'ภายใน 30 วัน',
      value: 30
    },
    {
      text: 'ภายใน 7 วัน',
      value: 7
    },
    {
      text: 'ระบุเอง',
      value: 0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public onProductionDateRangeChanged($event: any): void {
    this.param.productionFrom = $event.value.startDate;
    this.param.productionTo = $event.value.endDateDate;
  }

  public onClickClear(): void {
    this.param = new QaStatusSearchParam();
  }
}

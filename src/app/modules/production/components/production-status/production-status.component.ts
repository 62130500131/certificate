import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { InformationViewModel, ProductionStatusSearchParam, ProductionStatusViewModel } from '../../models/production.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ProductionService } from '../../services/production.service';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'production-status',
  templateUrl: './production-status.component.html',
  styleUrls: ['./production-status.component.css']
})
export class ProductionStatusComponent implements OnInit {

  public dataSourceCompleteStatus!: DataSource;
  public dataSourceMonitorStatus!: DataSource;
  public isLoading: boolean = false;
  public modalRef!: BsModalRef;
  public paramComplete: ProductionStatusSearchParam = new ProductionStatusSearchParam();
  public paramMonitor: ProductionStatusSearchParam = new ProductionStatusSearchParam();
  public productionOrder!: string;
  public dateSampleReady!: Date;
  public customerName!: string;
  public materialDesc!: string;
  public coilNo!: string;
  public heatNo!: string;
  public machine!: string;
  public grade!: string;
  public selectedStatus: string = "sampleReady";
  public selectedStatusFilm: string = "filmReady";
  public info: InformationViewModel[] = [];

  public dataMonitor!: any;

  @ViewChild('updateStatusWaitSample') public updateStatusWaitSample!: TemplateRef<any>;
  @ViewChild('updateStatusWaitFilm') public updateStatusWaitFilm!: TemplateRef<any>;
  @ViewChild('information') public information!: TemplateRef<any>;
  @ViewChild('monitorGrid') public monitorGrid!: DxDataGridComponent;
  @ViewChild('completeGrid') public completeGrid!: DxDataGridComponent;

  public dateDataSource: any[] = [
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
  ];

  public gradeDataSource = [
    {
      text: 'SS400',
      value: 'SS400'
    },
    {
      text: 'SS490',
      value: 'SS490'
    },
    {
      text: 'SM490YA',
      value: 'SM490YA'
    },
    {
      text: 'SM490A',
      value: 'SM490A'
    },
    {
      text: 'SM400',
      value: 'SM400'
    },
    {
      text: 'S275JR',
      value: 'S275JR'
    },
    {
      text: 'S335JR',
      value: 'S335JR'
    },
    {
      text: 'HR-1',
      value: 'HR-1'
    },
    {
      text: 'SPHC',
      value: 'SPHC'
    },
    {
      text: 'A36',
      value: 'A36'
    },
    {
      text: 'A516',
      value: 'A516'
    },
  ];

  constructor(public _modalService: BsModalService,
    private _productionService: ProductionService) { }

  ngOnInit() {

    this._productionService.getInformation().subscribe(res => {
      this.info = res;
    })

    this.dataSourceCompleteStatus = new DataSource({
      load: (options) => {
        return this._productionService.queryCompleteGrid({ options }).toPromise();
      }
    })

    this.dataSourceMonitorStatus = new DataSource({
      load: (options) => {
        return this._productionService.queryMonitorGrid({ options }).toPromise();
      }
    })
  }

  public onProductionCompleteDateRangeChanged($event: any): void {
    const { startDate, endDate } = $event.value;
    this.paramComplete.productionFrom = startDate;
    this.paramComplete.productionTo = endDate;
  }

  public onProductionMonitorDateRangeChanged($event: any): void {
    const { startDate, endDate } = $event.value;
    this.paramMonitor.productionFrom = startDate;
    this.paramMonitor.productionTo = endDate;
  }

  public onClickCompleteClear(): void {
    this.paramComplete = new ProductionStatusSearchParam();
  }
  public onClickMonitorClear(): void {
    this.paramMonitor = new ProductionStatusSearchParam();
  }


  public rowIndex: number = 0;

  public OnClickUpdateStatus(cell: any): void {
    if (cell.data.status == 'Wait Sample') {
      this.rowIndex = cell.rowIndex;
      this.productionOrder = cell.data.productionOrder;
      this.customerName = cell.data.soldToName;
      this.dateSampleReady = new Date;
      this.materialDesc = cell.data.materialDesc;
      this.coilNo = "";
      this.heatNo = "";
      this.grade = "";
      this.machine = "4586";
      this.modalRef = this._modalService.show(this.updateStatusWaitSample, {
        class: 'modal-xl'
      });
    }
    else {
      this.rowIndex = cell.rowIndex;
      this.modalRef = this._modalService.show(this.updateStatusWaitFilm, {
        class: 'modal-xl'
      });
    }
    this.dataMonitor = cell.data;
  }

  public OnClickDownStatus(cell: any): void {
    if (cell.data.status === 'Cancel') {
      Swal.fire({
        title: "Do you want to down status to wait sample?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then(result => {
        if (result.isConfirmed) {
          this._productionService.undoStatus(cell.data)
            .subscribe(() => { });
          this.completeGrid.instance.refresh();
          this.monitorGrid.instance.refresh();
        }
      });
    }
    if (cell.data.status === 'Sample Ready') {
      Swal.fire({
        title: "Do you want to down status to wait sample?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then(result => {
        if (result.isConfirmed) {
          this._productionService.undoStatus(cell.data)
            .subscribe(() => { });
          this.completeGrid.instance.refresh();
          this.monitorGrid.instance.refresh();
        }
      });
    }
    if (cell.data.status === 'Film Ready') {
      Swal.fire({
        title: "Do you want to down status to wait film?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then(result => {
        if (result.isConfirmed) {
          this._productionService.undoStatus(cell.data)
            .subscribe(() => { });
          this.completeGrid.instance.refresh();
          this.monitorGrid.instance.refresh();
        }
      });
    }
  }

  public radioChangeCancel($event: any): void {

  }
  public radioChangeSampleRaedy($event: any): void {

  }
  public onClickConfirm(): void {
    if (this.selectedStatus == "sampleReady") {
      this._productionService.updateStatus(this.dataMonitor, this.selectedStatus)
        .subscribe(() => { });
      this.completeGrid.instance.refresh();
      this.monitorGrid.instance.refresh();
      this.modalRef.hide();
    }
    if (this.selectedStatus == "cancelRadio") {
      Swal.fire({
        title: "Do you want to cancel this order?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this._productionService.updateStatus(this.dataMonitor, this.selectedStatus)
            .subscribe(() => { });
          this.completeGrid.instance.refresh();
          this.monitorGrid.instance.refresh();
          this.modalRef.hide();
        }
      });
    }
  }

  public onClickConfirmWaitFilm(): void {
    if (this.selectedStatusFilm == "filmReady") {
      this._productionService.updateStatus(this.dataMonitor, this.selectedStatusFilm)
        .subscribe(() => { });
      this.completeGrid.instance.refresh();
      this.monitorGrid.instance.refresh();
      this.modalRef.hide();
    }
    if (this.selectedStatusFilm == "cancelRadio") {
      Swal.fire({
        title: "Do you want to cancel this order?",
        icon: "question",
        heightAuto: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this._productionService.updateStatus(this.dataMonitor, this.selectedStatusFilm)
            .subscribe(() => { });
          this.completeGrid.instance.refresh();
          this.monitorGrid.instance.refresh();
          this.modalRef.hide();
        }
      });
    }
  }

  public onClickViewInformation(): void {
    this.modalRef = this._modalService.show(this.information, {
      class: 'modal-lg'
    });
  }



}

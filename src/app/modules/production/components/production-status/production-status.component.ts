import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { InformationViewModel, ProductionStatusSearchParam, ProductionStatusViewModel } from '../../models/production.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ProductionService } from '../../services/production.service';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridComponent } from 'devextreme-angular';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

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
  public batch = "";
  public bundleNo = "";
  public isCancel = false;

  public dataMonitor!: any;

  @ViewChild('information') public information!: TemplateRef<any>;
  @ViewChild('actionTemplate') public actionTemplate!: TemplateRef<any>;
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
    private _productionService: ProductionService,
    private sharedService: SharedService) { }

  ngOnInit() {

    this.sharedService.showLoading();
    this._productionService.getInformation().subscribe(res => {
      this.info = res;
      this.sharedService.hideLoading();
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


  public radioChangeCancel($event: any): void {

  }
  public radioChangeSampleRaedy($event: any): void {

  }

  public onClickCancel(cellData: any): void {
    this.isCancel = true;
    this.modalRef = this._modalService.show(this.actionTemplate, {
      class: 'modal-lg'
    })
  }

  public onClickViewInformation(): void {
    this.modalRef = this._modalService.show(this.information, {
      class: 'modal-lg'
    });
  }

  public onClickUndo(cellData: any): void {
    Swal.fire({
      title: "Do you want to undo status?",
      icon: "question",
      heightAuto: false,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    });
  }

  public onClickConfirmCancel(): void {
    this.modalRef.hide();
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Cancel Success!"
    });
  }

  public onClickConfirmUndo(): void {
    this.modalRef.hide();
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Undo Success!"
    });
  }


}

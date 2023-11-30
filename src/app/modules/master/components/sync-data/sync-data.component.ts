import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SyncDataViewModel, SyncLogsParam, SyncLogsViewModel } from '../../models/sync-data.model';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'sync-data',
  templateUrl: './sync-data.component.html',
  styleUrls: ['./sync-data.component.css']
})
export class SyncDataComponent implements OnInit {
  @ViewChild('syncLogs') syncLogs!: TemplateRef<any>;

  public param: SyncLogsParam = new SyncLogsParam();
  public modalRef!: BsModalRef;
  public logsList: SyncLogsViewModel[] = [
    {
      syncTime: (new Date()).toString(),
      actionBy: "CONNEX",
      status: "Failed",
    },
    {
      syncTime: (new Date()).toString(),
      actionBy: "CONNEX",
      status: "Success",
    },
    {
      syncTime: (new Date()).toString(),
      actionBy: "CONNEX",
      status: "Success",
    },
    {
      syncTime: (new Date()).toString(),
      actionBy: "CONNEX",
      status: "Success",
    },
    {
      syncTime: (new Date()).toString(),
      actionBy: "CONNEX",
      status: "Failed",
    }
  ];

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

  public dataSource: SyncDataViewModel[] = [
    {
      syncName: "SAP Production Order",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "Blend Data Material",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "SAP Delivery Order",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "Blend Data Customer",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    }
  ];
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public onClickSync(): void {
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
      title: "Sync Data Success!"
    });
  }

  public onClickViewLog(): void {
    this.modalRef = this.modalService.show(this.syncLogs, {
      class: 'modal-lg'
    });
  }

  public onDateRangeChanged($event: any): void {

  }

}

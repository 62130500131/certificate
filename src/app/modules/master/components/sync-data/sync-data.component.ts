import { Component, OnInit } from '@angular/core';
import { SyncDataViewModel } from '../../models/sync-data.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'sync-data',
  templateUrl: './sync-data.component.html',
  styleUrls: ['./sync-data.component.css']
})
export class SyncDataComponent implements OnInit {
  public dataSource: SyncDataViewModel[] = [
    {
      syncName: "GD Findi",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "Excel Planning",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "Material",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "DO",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    },
    {
      syncName: "Customer",
      lastSyncBy: "CONNEX",
      lastSyncTime: (new Date()).toString()
    }
  ];
  constructor() { }

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


}

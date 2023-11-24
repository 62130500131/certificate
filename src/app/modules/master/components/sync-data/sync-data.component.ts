import { Component, OnInit } from '@angular/core';
import { SyncDataViewModel } from '../../models/sync-data.model';

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



}

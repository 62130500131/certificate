import { Component, OnInit } from '@angular/core';
import { MillViewModel } from '../../models/mill.model';
import { MillService } from '../../services/mill.service';

@Component({
  selector: 'master-mill',
  templateUrl: './master-mill.component.html',
  styleUrls: ['./master-mill.component.css']
})
export class MasterMillComponent implements OnInit {

  public param: any = {
    mill: ""
  };
  public dataSource: MillViewModel[] = []
  constructor(private millService: MillService) { }

  ngOnInit() {
    this.millService.initial()
      .subscribe(res => {
        this.dataSource = res
      })
  }

  public onClickSearch(): void {

  }
  public onClickClear(): void {

  }
  public onClickEdit(cellData: any): void {

  }

}

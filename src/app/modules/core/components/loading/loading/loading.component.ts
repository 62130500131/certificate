import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/modules/shared/services/Shared.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public isLoading$: Observable<boolean>;
  public isLoading: boolean = false;
  constructor(shared: SharedService) {
    this.isLoading$ = shared.isLoading;
  }

  ngOnInit() {
  }

}

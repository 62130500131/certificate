import { Component, OnInit, WritableSignal, computed, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // public url: string = ""
  constructor(private router: Router) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const url = this.router.url.split("/")
    //     console.log(url[url.length - 1])
    //     this.url = url[url.length - 1]
    //   }
    // })
  }

  ngOnInit() {
  }

  public get isShow() {
    return this.router.url != '/login-page' && this.router.url != '/customer-entry' && this.router.url != '/customer-page'
  }

  public get url() {
    const url = this.router.url.split("/")
    return url[url.length - 1]
  }
}

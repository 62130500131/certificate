import { Component } from '@angular/core';
import { auth } from '../../model/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginParam: auth = new auth();

  constructor(){

  }

  public onClickLogin(){

  }
}
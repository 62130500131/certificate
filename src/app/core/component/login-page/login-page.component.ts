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
    if(this.loginParam.username == 'weeraphon' && this.loginParam.password == '1234'){
      alert("Login Success!");
    }else{
      alert("Invalid Username or Password!")
    }
  }
}
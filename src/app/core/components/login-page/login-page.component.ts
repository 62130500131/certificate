import { Component } from '@angular/core';
import { Auth } from '../../models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginParam: Auth = new Auth();

  constructor(private router: Router){
  }

  public onClickLogin(){
    if(this.loginParam.username == 'weeraphon' && this.loginParam.password == '1234'){
      alert("Login Success!");
      this.router.navigate(['certificate-list'])
    }else if(this.loginParam.username == 'supakarn' && this.loginParam.password == '1234'){
      alert("Login Success!");
      this.router.navigate(['customer-entry'])
    }
    else{
      alert("Invalid Username or Password!")
    }
  }
}
import { Component } from '@angular/core';
import { auth } from '../../model/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginParam: auth = new auth();

  constructor(private router: Router){
  }

  public onClickLogin(){
    if(this.loginParam.username == 'weeraphon' && this.loginParam.password == '1234'){
      alert("Login Success!");
    }else if(this.loginParam.username == 'supakarn' && this.loginParam.password == '1234'){
      alert("Login Success!");
      this.router.navigate(['customer'])
    }
    else{
      alert("Invalid Username or Password!")
    }
  }
}
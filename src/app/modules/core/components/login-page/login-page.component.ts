import { Component } from '@angular/core';
import { auth } from '../../models/auth.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginParam: auth = new auth();
  public userType = "TMT";
  constructor(private router: Router) {
  }

  public onClickLogin() {
    if (this.loginParam.username == 'weeraphon' && this.loginParam.password == '1234') {
      Swal.fire({
        title: "Login Success!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['certificate-list'])
        }
      });
    } else if (this.loginParam.username == 'supakarn' && this.loginParam.password == '1234') {
      Swal.fire({
        title: "Login Success!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['customer-entry'])
        }
      });
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Invalid Username or Password!",
      });
    }
  }
}
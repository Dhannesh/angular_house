import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/service/alertify.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService, private alertify:AlertifyService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    const user:User = this.authService.authUser(loginForm.value);
    if(user){
      localStorage.setItem('token',user.userName)
     this.alertify.success ("Login Successful");
     this.router.navigate(['/']);
    }else{
      this.alertify.error("invalid email/password");
    }

  }

}

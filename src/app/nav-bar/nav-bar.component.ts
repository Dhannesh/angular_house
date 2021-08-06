import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName!: string;
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    this.userName = localStorage.getItem('token')!;
    return this.userName;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success("You are successfully logout!");
  }
}

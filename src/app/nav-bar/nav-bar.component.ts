import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName!: string;
  constructor() { }

  ngOnInit(): void {
  }

  loggedIn(){
    this.userName = localStorage.getItem('token')!;
    return this.userName;
  }
  onLogout(){
    localStorage.removeItem('token');
  }
}

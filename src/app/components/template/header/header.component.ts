import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from 'src/app/views/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn = false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    location.reload();
  }
}

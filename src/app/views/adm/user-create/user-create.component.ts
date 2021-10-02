import { User } from './../../../components/models/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    
    cpf: '',
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    profile: '',
    language: '',
    active: null,
    roles: '',
    userName: ''
  }

  // remember: to inject bootstrap class/mod for alert msg
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      // this.userService.showMessage('User successfully added!')
      // this.router.navigate(['/adm'])
    })
  }

  cancel(): void {
    this.router.navigate(['/user'])
  }
 
}

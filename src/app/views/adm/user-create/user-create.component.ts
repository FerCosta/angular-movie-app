
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { User } from 'src/app/models/user.model';

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
    language: {
      languageId: 0,
      tag: '',
      name: ''
    },
    active: true,
    roles: '',
    userName: '',
    languageId: 0,
    tag: ''
  }

  // remember: to inject bootstrap class/mod for alert msg
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
    })
  }

  // cancel(): void {
  //   this.router.navigate(['/user'])
  // }
 
}

import { User } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  // user: User
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


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.readById(id).subscribe(user => {
      this.user = user
    })
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.router.navigate(['adm/user'])
    })
  }

  cancel(): void {
    this.router.navigate(['adm/user'])
  }

}

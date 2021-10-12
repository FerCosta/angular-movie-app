import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
 
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

  deleteUser(): void {
    this.userService.delete(this.user).subscribe(() => {
      this.router.navigate(['adm/user'])
    })
  }

  cancel(): void {
    this.router.navigate(['adm/user'])
  }

}

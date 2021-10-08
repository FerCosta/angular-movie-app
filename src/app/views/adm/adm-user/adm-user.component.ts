import { Language } from './../../../models/language.model';
import { User } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adm-user',
  templateUrl: './adm-user.component.html',
  styleUrls: ['./adm-user.component.css']
})
export class AdmUserComponent implements OnInit {

  // user: User = {
  //   cpf: '',
  //   name: '',
  //   phoneNumber: '',
  //   email: '',
  //   password: '',
  //   profile: '',
  //   language: {
  //     languageId: 0,
  //     tag: '',
  //     name: ''
  //   },
  //   active: true,
  //   roles: '',
  //   userName: '',
  //   languageId: 0,
  //   tag: ''
  // }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // createUser(): void {
  //   this.userService.create(this.user).subscribe(() => {
  //   })
  // }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService:LoginService) { }
  
  ngOnInit(): void {
   
  }

  onSubmit() {
    //console.log('form is submitteeeed');
    if( (this.credentials.username != '' && this.credentials.password != '')
      && (this.credentials.username != null) && (this.credentials.password != null) ) {
        console.log('Submit sucess!')

        //token generate
        this.loginService.generateToken(this.credentials).subscribe(
          (response:any) => {
            console.log(response.token);
            this.loginService.loginUser(response.token)
            //Remember: switch to add th route
            window.location.href="/"
          },
          error => {
            console.log(error);
          }
        )
      } else {
        console.log('Fields empty!')

      }


  }
}

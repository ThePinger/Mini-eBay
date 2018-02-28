import { Component, OnInit, Input } from '@angular/core';

import { SignupService } from '../../signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  //@Input emailenter : string;

    eMail ='';   
    userName = '';
    passWord = '';
  constructor() { } // injext signUp service



  ngOnInit() {
  }

  signUp(mail : string, name : string, pass : string){
      this.eMail = mail;
      this.userName = name;
      this.passWord = pass;

  }
  
}

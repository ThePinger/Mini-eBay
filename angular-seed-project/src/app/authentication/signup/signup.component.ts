import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  values = '';

  signupResponse ;
  username;
  password  ;
  email  ;
  expect;
  it ; 
  emsg; 

  constructor(private authService : AuthService , private route : Router , private http :HttpClient ) { } 

  ngOnInit() {}


 /* getMessg(){
    this.http.request('http://localhost:4200/auth/signup')
    .subscribe(res => { console.log(res.text()) })
  }*/

  async signUp(mail : string, name : string, pass : string){
      this.email= mail;
      this.username =name;
      this.password = pass;

      await this.authService.signUp(this.username,this.email ,this.password)
      .subscribe(
      (response => {this.route.navigate(['/auth/login'])}),
      (res => {this.signupResponse = "SignUP failed try again"}));


      //setTimeout( (this.test = this.signupResponse.msg) ,1000);
        
      // await this.authService.login(username, password).
      // subscribe(
      // (response => {this.router.navigate(['/user'])}),
      //  (err => {this.loginResponse = "Username or Password not Correct"}));
     // this.route.navigate(['auth/login']);
      //setInterval(this.redirectTo,2000);

      //const req = httpTestingController.expectOne(testUrl);
   }    
  }


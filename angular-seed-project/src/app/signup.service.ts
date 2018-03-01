import { Injectable } from '@angular/core';

import { SignupComponent } from './authentication/signup/signup.component'
import { HttpClient } from '@angular/common/http'

import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { User } from './authentication/signup/User';

@Injectable()
export class SignupService {

  


  constructor(private http: HttpClient) { }


  SignUpResponse( user:string,  email:string  , pass:string){
    return this.http
    .post(environment.apiUrl+ 'user/signUp' ,{username : user,  email : email,  password :pass});
  }
  


}

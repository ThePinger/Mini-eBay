import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username, password)
  {
    return this.http.post(environment.apiUrl + 'user/logIn', {username: username, password: password}, {withCredentials: true});
  }

  logout()
  {
    return this.http.get(environment.apiUrl + 'user/logOut', {withCredentials: true});
  }

  isLoggedIn()
  {
    return this.http.get(environment.apiUrl + 'user/loggedIn', {withCredentials: true});
  }

  signUp(username, email, password)
  {
    return this.http.post(environment.apiUrl + 'user/signUp', {username: username, email: email, password: password}, {withCredentials: true});
  }
}
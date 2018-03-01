import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username, password)
  {
    return this.http.post(environment.apiUrl + 'user/logIn', {username: username, password: password});
  }
}

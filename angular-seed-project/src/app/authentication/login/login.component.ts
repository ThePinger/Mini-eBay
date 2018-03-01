import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginResponse;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(username, password)
  {
      this.authService.login(username, password).subscribe(msg => {this.loginResponse = msg});
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginResponse;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  async login(username, password)
  {
      await this.authService.login(username, password).subscribe((response => {this.router.navigate(['/user'])}), (err => {this.loginResponse = "Username or Password not Correct"}));
  }
}

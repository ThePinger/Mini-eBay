import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './dashboard-menu';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
  
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() 
  {
      this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])});
  }
}

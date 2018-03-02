import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './../dashboard/dashboard-menu';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  menu: NbMenuItem[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() 
  {
      this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])});
      this.menu = MENU_ITEMS;
  }

}

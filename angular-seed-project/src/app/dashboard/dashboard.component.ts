import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-dashboard',
  template: `<p>Fucking Dashboard</p>`
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }
}

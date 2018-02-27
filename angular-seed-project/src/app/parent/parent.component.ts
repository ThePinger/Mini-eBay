import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './../dashboard/dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  menu: NbMenuItem[];

  constructor() { }

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../service/auth.service';
import { ThemeModule } from '../../@theme/theme.module';

import { NbBadgeComponent } from '../../../framework/theme/components/badge/badge.component';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../service/smart-table.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CartComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private service: SmartTableService) { }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      //confirmSave: true,
      
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      product: {
        title: 'Product',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      createdAt: {
        title: 'Created At',
        type: 'date',
      },
      updatedAt: {
        title: 'Updated At',
        type: 'date',
      },
    },
  };

  ngOnInit()
  {
    this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])}); 
  }

  checkout()
  {

  }

}



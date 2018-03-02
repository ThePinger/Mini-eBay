import { Component, OnInit } from '@angular/core';
//import { MENU_ITEMS } from './store-menu';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
 //template: '<ng2-smart-table [Myprodcuts]="Myproducts"></ng2-smart-table>'
})

export class StoreComponent implements OnInit {

  createresponse;
  updateresponse;
  deleteresponse;

  constructor(private authService: AuthService, private router: Router, private storeService: StoreService) { }

  ngOnInit() 
  {
      this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])});
  }
  //   async createProduct(name, price){
  //   await this.storeService.createProduct(name, price).subscribe((response => {this.router.navigate(['/user/store/products'])}), (err => {this.createresponse = "Can not create product"}));
  // }
  /*async updateProduct(){
    await this.storeService.updateProduct().subscribe((response => {this.router.navigate(['/user/store/products'])}), (err => {this.createresponse = "Can't update product"}));
  }
  async deleteProduct(){
    await this.storeService.deleteProduct().subscribe((response => {this.router.navigate(['/user/store/products'])}), (err => {this.deleteresponse = "Can't delete product"}));
  }*/
 


}

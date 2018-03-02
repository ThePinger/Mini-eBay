import { Component, OnInit } from '@angular/core';
//import { MENU_ITEMS } from './store-menu';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Product } from './Product';

// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { StoreService } from '../service/store.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
 //template: '<ng2-smart-table [Myprodcuts]="Myproducts"></ng2-smart-table>'
})

export class StoreComponent implements OnInit {

  response;
  createresponse;
  updateresponse;
  deleteresponse;
  products;
  constructor(private authService: AuthService, private router: Router, private storeService: StoreService, private cartService: CartService) { }

  ngOnInit() 
  {
      this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])});
      this.storeService.getProducts().subscribe(products => {this.response = products}, err => {});
      this.getProducts();
  }

  getProducts()
  {
    for(let result of this.response){
       this.products.push({
          id: result.id, 
          name: result.name,
          price: result.price,
          sellername: result.sellernsame
       });
    }
  }

  async createProduct(name, price)
  {
    await this.storeService.createProduct(name, price).subscribe((response => {this.router.navigate(['/user'])}), (err => {this.createresponse = "Can not create product"}));
  }

  async addToCart(productID)
  {
    await this.cartService.addToCart(productID).subscribe(msg => {}, err => {});
  }


}

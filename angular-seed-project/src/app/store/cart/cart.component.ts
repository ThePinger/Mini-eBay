import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../service/auth.service';
import { CartService } from '../../service/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products;

  constructor(private authService: AuthService, private router: Router, private cartService:CartService ) { }

 async ngOnInit()
  {
    this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])}); 
    await this.cartService.viewCart().subscribe(msg => {this.products  = msg.data}, err => {});
  }

  checkout()
  {
    
  }

  async removeFromCart(productname)
  {
    await this.cartService.removeFromCart(productname).subscribe(msg => {console.log("removedfromcart")},err =>{});
  } 

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  checkout()
  {
     return this.http.get(environment.apiUrl + '/cart/checkout', {withCredentials: true});
  }

  removeFromCart(productname)
  {
     return this.http.post(environment.apiUrl + '/cart/removeFromCart', {product: productname}, {withCredentials: true});
  }

  addToCart(productname)
  {
     return this.http.post(environment.apiUrl + '/cart/addToCart', {product: productname}, {withCredentials: true});      
  }

  viewCart()
  {
     return this.http.get(environment.apiUrl + '/cart/viewCart', {withCredentials: true});
  }

}
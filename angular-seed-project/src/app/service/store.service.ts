import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) {}

  getProducts()
  {
    return this.http.get(environment.apiUrl + '/product/getProducts', {withCredentials: true});
  }

  createProduct()
  {

  }

  updateProduct()
  {

  }

  deleteProduct()
  {

  }
}

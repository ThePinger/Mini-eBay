import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StoreComponent } from '../store/store.component'


@Injectable()

export class StoreService{


    constructor(private http: HttpClient) { }
    // getProducts(){
    //     return this.http.get(environment.apiUrl + '/product/getProduct/:productId',  {withCredentials: true});
    // }
    // createProduct(name, price){
    //     return this.http.post(environment.apiUrl + '/product/createProduct', {name: name, price: price}, {withCredentials: true});
  
    // }
    /*deleteProduct(){
        return this.http.delete(environment.apiUrl + '/product/deleteProduct/:productId', {withCredentials: true} );
    }

    updateProduct(){
        return this.http.patch(environment.apiUrl + '/product/updateProduct/:productId',{withCredentials:true} );
    }*/

}

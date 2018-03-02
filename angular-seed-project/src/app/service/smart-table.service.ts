import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    product: 'Tide',
    price: 152,
    createdAt: '5/5/2018',
    updatedAt: '15/6/2018'
    
  }];

  getData() {
    return this.data;
  }
}
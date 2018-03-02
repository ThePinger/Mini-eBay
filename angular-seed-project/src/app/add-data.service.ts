import { Injectable } from '@angular/core';

@Injectable()
export class AddDataService {

  constructor() { }
  data = [{
    ID: 1,
    Name: 'iPhone X',
    Price: 21000,
    Created_at: new Date ('2017-10-21'),
    Updated_at: new Date ('2017-11-29'),
    Seller_Name: 'Apple'},
    {
      ID: 2,
      Name: 'Michael Kors black leather bag',
      Price: 6500,
      Created_at: new Date ('2017-07-15'),
      Updated_at: new Date ('2017-07-27'),
      Seller_Name: 'Michael Kors'},
    {
      ID: 3,
      Name: 'Polo Shirt',
      Price: 1200,
      Created_at: new Date ('2017-04-18'),
      Updated_at: new Date ('2017-05-20'),
      Seller_Name: 'Tommy Hilfiger'},
  ];
  getData(){
    return this.data;
  }
}

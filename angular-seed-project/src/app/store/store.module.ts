import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';

import { SmartTableService } from '../../app/service/smart-table.service'

//import { SmartTableService } from '../service/smart-table.service'
@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [StoreComponent, CartComponent],
  providers: [SmartTableService]
})
export class StoreModule { };

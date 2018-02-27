import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [StoreComponent, CartComponent]
})
export class StoreModule { }

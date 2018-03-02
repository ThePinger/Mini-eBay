import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
import { AddDataService } from '../add-data.service';
//import { ButtonRenderComponent } from '../button-render/button-render.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    StoreRoutingModule,
  
  ],
  declarations: [StoreComponent, CartComponent,],
  providers: [AddDataService]
})
export class StoreModule { }

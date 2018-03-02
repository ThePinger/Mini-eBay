import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: StoreComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: '**',
        redirectTo: '/user'
      }
    ]
  }
  
];
const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoreRoutingModule {}

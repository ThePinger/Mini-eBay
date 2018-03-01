import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ParentComponent } from './parent/parent.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: 'user',
    component: ParentComponent,
    children: [
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'start',
        redirectTo: 'dashboard'
      }
    ]
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ThemeModule } from '../@theme/theme.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthenticationModule { }

import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { DefaultComponent } from './default/default.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonRenderComponent } from './button-render/button-render.component';
import { SearchFieldsComponent } from './search-fields/search-fields.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, DefaultComponent, ButtonRenderComponent, SearchFieldsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents:[ButtonRenderComponent,],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService]
})
export class AppModule {}

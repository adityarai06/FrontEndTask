import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TryeventComponent } from './tryevent/tryevent.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service'


@NgModule({
  declarations: [
    AppComponent,
    TryeventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
   
 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

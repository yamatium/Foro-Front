import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { PruebasModule } from './pruebas/pruebas.module';
import { ForoModule } from './foro/foro.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';


import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
   AppComponent,
   ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PruebasModule,
    ForoModule,
    AuthModule,
  ],
    providers: [],
    bootstrap: [AppComponent],
   
})
export class AppModule { }

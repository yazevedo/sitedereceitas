import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // <- Faltando no seu código anterior
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // <-- Confirme o caminho

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // <-- TEM que estar aqui
  ],
  imports: [
    BrowserModule, // <-- ESSENCIAL para app web
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

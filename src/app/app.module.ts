import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importação do ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importação do CommonModule
import { ReceitasComponent } from './receitas/receitas.component'; // Ajuste o caminho conforme necessário


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReceitasComponent

    // Remova LoginComponent daqui!
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

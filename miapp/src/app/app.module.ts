import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Servicios
  providers: [],
  //Donde inicia la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }

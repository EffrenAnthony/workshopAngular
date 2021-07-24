import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios
  providers: [],
  //Donde inicia la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }

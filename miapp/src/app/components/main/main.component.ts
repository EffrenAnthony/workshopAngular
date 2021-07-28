import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
// OnInit es parte del siclo de vida y allí se utilizan los serivicios, en este caso fue en el constructor
export class MainComponent implements OnInit, OnDestroy {

  url:string = 'https://images.unsplash.com/photo-1627386172141-c6fec8bf5aa3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

  listaTareas:string[] = []
  tarea:string = 'Lavar platos'
  suscripcionAData:Subscription
  // vamos a hacer una inyección por dependencia, que sirbe para hacer mas eficiente el codigo
  // utiliza el patron singleton que significa una saloa instancia que la utilizaremos donde la necesitemos
  constructor(private _sData:DataService) {
    this.suscripcionAData = this._sData.estadoActual
    .subscribe((data) => {
      console.log('sape')
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // la desuscripción es en el ngOnDesatroy
    this.suscripcionAData.unsubscribe()
  }
  // Angular no tiene un virtual DOM por eso utiliza directamente el DOM y tiene un siclo de vida
  agregarTarea(){
    console.log(`Tarea "${this.tarea}" agregada`)
    this.listaTareas.push(this.tarea)
    this.tarea = ''
  }

  guardarTareas(){
    this._sData.modificarEstado(this.listaTareas)
  }
}

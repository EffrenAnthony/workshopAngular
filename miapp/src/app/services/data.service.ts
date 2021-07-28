import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// injectable permite que por defecto estén registrados nuestros servicios en appModule
@Injectable({
  providedIn: 'root'
})
// Angular manejra observables, nos permite suscribirnos a un estado o varios,
export class DataService {
  // beahaviourSubject es inmutable y es como un estado
  private estado = new BehaviorSubject(["inicial"])
  estadoActual = this.estado.asObservable()

  constructor() { }

  modificarEstado(estadoNuevo:Array<any>){
    // next le indica el siguiente estado, como setState
    this.estado.next(estadoNuevo)
    // PODEMOS SUSCRIBIRNOS Y UTILIZAR ESTO COMO UN CONTEXT
  }
}

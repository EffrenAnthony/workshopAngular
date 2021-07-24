interface iSmartphone {
  model:string,
  brand:string,
  year:number,
  memory:number,
  screen?:number,
  readonly giroscope: boolean
}

let Modelo1:iSmartphone = {
  model: "iPhone 12 Pro Max",
  brand: "Apple",
  year: 2020,
  memory: 6,
  // screen: 6.7,
  giroscope: true
}

Modelo1.brand = "Samsung"
// Modelo1.giroscope = false
// read only indica que luego de definir un parametro, ya no se puede modificar
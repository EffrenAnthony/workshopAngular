let saludo = "Hola Mundo"

console.log(saludo)

// types
let texto:string = "Fiestas patrias"

// texto = 7
// texto = true

let cantidad:number = 100

let isWeekDay:boolean = false

let numbers:number[] = [1,2,3,4]
let numbers2:Array<number> = [1,2,3,4]

let random:any = {combo: "salchipapa", precio:12} //acepta todo tipo de dato

let random2:unknown = { combo: "pollo", precio: "50" } //acepta todo menos undefined o null

let sumar = (num1: number, num2: number):number => {
  return num1 + num2
}

sumar(20, 20)
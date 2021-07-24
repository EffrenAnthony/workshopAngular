function decorador(texto:string){
  // target va a hacer referencia a toda la clase
  return function(target){
    target.prototype.saludar = function(){
      console.log(`Buen día, ${texto}`)
    }
  }
}
// los decoradores van justo encima de lo que deseemos "decorar", sin llaves espacios o saltos de linea
@decorador("que tal el workshop")
class Persona2 {
  nombre:string
  constructor(nombre:string) {
    this.nombre = nombre
  }

  saludar(texto:string){
    console.log(`Hola soy ${this.nombre}, ${texto}`); 
  }
}

let Juan2 = new Persona2("jUAN")
Juan2.saludar("vengo de arequipa")
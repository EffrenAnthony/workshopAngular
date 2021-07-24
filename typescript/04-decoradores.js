var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    // target va a hacer referencia a toda la clase
    return function (target) {
        target.prototype.saludar = function () {
            console.log(`Buen día, ${texto}`);
        };
    };
}
// los decoradores van justo encima de lo que deseemos "decorar", sin llaves espacios o saltos de linea
let Persona2 = class Persona2 {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar(texto) {
        console.log(`Hola soy ${this.nombre}, ${texto}`);
    }
};
Persona2 = __decorate([
    decorador("que tal el workshop")
], Persona2);
let Juan2 = new Persona2("jUAN");
Juan2.saludar("vengo de arequipa");

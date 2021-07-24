class Persona {
    constructor(age, name, lastName) {
        this._age = age,
            this._name = name,
            this._lastName = lastName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        // se puede añadir verificaiones
        if (newAge <= 0 || newAge >= 140) {
            throw new Error("Age not valid");
        }
        else {
            this._age = newAge;
        }
    }
}
let estudiante = new Persona(20, "juan", "peres");
// estudiante.name = "Jose"
console.log(estudiante.age);
estudiante.age = 150; // dará error

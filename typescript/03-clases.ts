class Persona {
  private _age: number;
  private _name: string;
  private _lastName: string;

  constructor(age: number, name: string, lastName: string){
    this._age = age,
    this._name = name,
    this._lastName = lastName;
  }

  public get age(){
    return this._age
  }
  public set age(newAge: number){
    // se puede añadir verificaiones
    if (newAge <= 0 || newAge >= 140){
      throw new Error("Age not valid");
    } else {
      this._age = newAge;
    }
  }
}

let estudiante = new Persona(20, "juan", "peres");

// estudiante.name = "Jose"

console.log(estudiante.age)
estudiante.age = 150 // dará error
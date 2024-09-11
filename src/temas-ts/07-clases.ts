class Persona{

    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Hola, mi nombre es ${this.nombre}
            y tengo ${this.edad}`)
    }
}
let persona:Persona;
persona= new Persona('Juan', 23);
persona.imprimir();
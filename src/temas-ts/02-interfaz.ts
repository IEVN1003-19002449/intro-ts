
interface Alumno{ //Si defino una interfaz tengo que designar todos los campos que se utulizaran
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number; //? vuelve opcional ete campo
}


const alumno:Alumno={
    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com',
}

console.log(alumno)

let mascotas = ['perro','gato', 'perico'];
mascotas[1]='nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);


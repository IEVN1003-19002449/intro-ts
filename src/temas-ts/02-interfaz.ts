
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
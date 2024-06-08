// // POO -Prototipos es un mecanismo un objeto hereda de un obj padre, 
// Clases- modelo a seguir 
// Objetos - es una instancia de una Clase
// Atributo - Es una caracterisitica o propiedad del objeto
// Metodos - Son las acciones de un objeto puede realizar
// Herencia es basada en prototipos, esta tiene ciertas particularidades

// ----------------Clases , herencias, prototipos------------1-----------------------------------------


// Function constructora
//  function Animal(nombre,genero){
//    // Atributos 
//    this.nombre=nombre;
//    this.genero=genero;
// // Metodos
//    this.sonar = function (){
//       console.log("I make sound cuz I want to! ");
//    }
 

//    this.saludo = function (){
//       console.log(`HI I am ${this.nombre}`);
//    }

//    this.gender = function (){
//       console.log(`And I am ${this.genero}`);
//    }

// }

// // La palabra reservada NEW nos ayudara a crear una nueva variable, en una funcion constructora

// const Rocky = new Animal("Rocky","Androgeno")
//       scoobyDoo = new Animal("ScoobyDoo","Macho Temeroso")

// scoobyDoo.saludo()
// console.log(Rocky);
// console.log(scoobyDoo);
// Rocky.saludo()
// Rocky.gender()
// scoobyDoo.gender()

// PAra usar correctamente las clases, debemos implementarlas con los prototipos 
// Hace un barrido con el prototipo de la funcion que esta asignada 


// class Animal {
//    constructor(nombre, genero) {
//       // Atributos 
//       this.nombre = nombre;
//       this.genero = genero;
//    }
//    // Metodos
//    sonar() {
//       console.log("I make sound cuz I want to! ");
//    }
//    saludo() {
//       console.log(`HI I am ${this.nombre}`);
//    }
//    gender() {
//       console.log(`And I am ${this.genero}`);
//    }
// }



// -----------------Clases , herencias, prototipos----------------2------------------------------------



// Herencia prototipica 
// es la capacidad e heredar caracteristicas de un padre a un hijo, esta dse da de manera de cadena 
// prototipica}

// function Perro(nombre, genero, raza,size){
//    // Funcion constructora padre , sera Animal
//    this.super = Animal;
//    this.super(nombre, genero);
//    this.size = size;
//    this.raza = raza;
// }

// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;


// // sobreescribir Prototipo Padre e Hijo

// Perro.prototype.sonar = function(){
//    console.log("I am A dog, Im barking ");
// }

// Perro.prototype.ladrar = function(){
//    console.log("WAFF WAFF ");
// }

// const rocky = new Perro("Rocky","Androgeno","Chiguagua","Pequeño")
// scoobyDoo = new Animal("ScoobyDoo","Macho Temeroso")

// console.log(rocky);
// rocky.saludo()
// rocky.ladrar()
// rocky.sonar()

// console.log(scoobyDoo);
// scoobyDoo.sonar()
// scoobyDoo.saludo()

// ---------------------Clases , herencias, prototipos---------------3---------------------------------

// Asignacion de las propiedades 
// Las clases no reciben paramaetros, reciben el metodo constructor, el cual recibe las propiedades

class Animal {
   constructor(nombre, genero,size) {
      // Atributos 
      this.nombre = nombre;
      this.genero = genero;
      this.size = size;
   }


// Metodos 
sonar(){
   console.log(" mi sonido es contagioso");
}


saludar(){
   console.log(`i am ${this.nombre}`);
}
yosoy(){
   console.log(`i am ${this.genero}`);
}

talla(){
   console.log(`i am ${this.size}`);
}

}

// Keyword: Extends sirve para crear una clase hija de una clase padre 


 class Perro extends Animal{
   constructor(nombre,genero, size){
      // Manda a llamar al construsctor padre 
      super(nombre, genero,size)
      
   }


   sonar(){
      console.log("Mi sonido es sutil y agudo ");
   }

   ladrar(){
      console.log("WOUUF WOFF");
   }

   talla(){
      console.log(`i am ${this.size}`);
   }

   // un metodo estatico se puede ejecutar sin encesidad de instanciar la clase .

      static queEres(){
         console.log("esto es una prueba de una Class Animal haciendo polimorfismo con las Clase Perro");
      }

      
 }

 Perro.queEres() // se declara el method static 

const gato = new Animal("Sofia","Gata Calica",'20 Cm')
const sky = new Perro("Sky Perez","criolla","60CM");



   console.log(sky);   
   sky.sonar()
   sky.ladrar()
   sky.saludar()
   sky.yosoy()
   sky.talla()

 console.log('-----------------------------------------------------------------------------');


   console.log(gato);
   gato.sonar()
   gato.saludar()
   gato.yosoy()
   gato.talla()
   // JS trabaja la POO con prototipos no con clases, 
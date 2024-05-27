/* Las grandes diferencias que manejamos en ES5 y ES6 es la forma en como simplificamos el lenguaje,
 haciendolo mas legible.Eso en cuanto a Functions, en cuanto a clases js menciona que no tienen 
 clases si no protipos el cual es una function constructora de obj representada por el metodo class {};



 Destructuring: Tenemos nuevas formas de asignar valores a Arrays y a Objetos. Veamos unos ejemplos

// ----------------ES5--------------------------------
 var [a, b] = ["hola", "mundo"];
console.log(a); // "hola"
console.log(b); // "mundo"

var obj = { nombre: "Carlos", apellido: "Azaustre" };
var { nombre, apellido } = obj;
console.log(nombre); // "Carlos"

// -------ES6---------------------------------

var foo = function () {
    return ["175", "75"];
  };
  var [estatura, peso] = foo();
  console.log(estatura); //175
  console.log(peso); //75

Módulos

A esto lo llamo un browserify nativo. Ahora JavaScript se empieza a parecer a lenguajes 
como Python o Ruby. Llamamos a las funciones desde los propios Scripts, sin tener que importarlos 
en el HTML, si usamos JavaScript en el navegador.

//File: lib/person.js
module "person" {
	export function hello(nombre) {
    	return nombre;
    }
}
export function hello(nombre) {...}; o también, si solo es una función la que tiene el módulo: 
export default function(nombre) {...};


Y para importar en otro fichero:

//File: app.js
import { hello } from "person";
var app = {
	foo: function() {
    	hello("Carlos");
    }
}
export app;

 */

// Object

// Metodos Array and arrow function ()=>{}
const points = [40, 100, 1, 5, 25, 10];
const Xbox = ["ForzaHorizon 4","Fornite", "FarCry5","Mortal Kombat","Call Of duty", "Assassins's Creed ", "Batman Triology"];
const developers = [{
    Id:2202,
    Name:"Jhon ",
    Skills:["HTML", "React","Node.js","Javascript" ]
},{
    Id:2203,
    Name:"Michael ",
    Skills:["HTML", "CSS","tailwind","Node.js","Javascript" ,"GIT"]
},{
    Id:2008,
    Name:"Andrea ",
    Skills:["HTML", "CSS","tailwind","Node.js","Javascript" ,"Ruby","angular", "GIT","GITHUB"]
},

]

const videoGames =[{
    ID:10,
    Company:"Ubisoft",
    Category: "Arcade",
    Name:"Assassins Creed Origins",
    year: "2021",
    R:"15+",
},
{
    ID:11,
    Company:"Activision Blizard",
    Category: "Action",
    Name:"Call of Dutry MW2",
    year: "2008",
    R:"18+"


},
{
    ID:12,
    Company:"Epic games",
    Category: "RPG",
    Name:"Fornite",
    year: "2021",
    R:"12+"


},
{
    ID:13,    
    Company:"Ubisoft",
    Category: "Adventure",
    Name:"Prince of persia the warrior within",
    year: "2008",
    R:"18+"


},
{
    ID:14,    
    Company:"Ubisoft",
    Category: "Arcade ",
    Category: "Adventure",
    Name:"FarCry 5",
    year: "2020",
    R:"18+"


},
{
    ID:15,
    Company:"CAPCOM",
    Category: "Arcade ",
    Category: "Adventure",
    Name:"resident Evil 5",
    year: "2023",
    R:"18+"


}
]
// ------------------------ForEach ES6-------------------------
// executes a function once for each  array elem
// para queesta funcion de resultados, lo mas propio es llamarla con una variable ya declarada para que asi nos guarde el resultado
// que deseamos

let arr = [];
videoGames.forEach((el)=>{arr.push(el.Company + " " + el.R);
})
// console.log(arr);





// ------------------------MAP ES6-------------------------
// map creates a new array populated with the results of the calling function of the array , 

const input =  videoGames.map((element)=>{return element.Name + " : " + element.ID; })
// const input =  videoGames.map(element => element.Company + " : " + element.Name)

// console.log(input);

// usando el spread operator

const copiar  = videoGames.map((element)=>{
    return {
        // para simplificar y crear un nuevo elemento tenemos que tener en cuenta la informacion que recopilamos en el parametro
        // para esto llamamos al spread operator el cual simplifica 
        ...element,
        // para agregar un nuevo obj y concatenarlo usamos el template string
        Egi: `${element.ID} - ${element.Category}`,
        
    };
})

// console.log(copiar);


// ------------------------Filter ES5-------------------------

// for (let i = 0; i < videoGames.length; i++) {
//     if (videoGames[i].Company==="Ubisoft") {
//         console.log(videoGames[i]);

//     }
    
// }



// ------------------------Filter ES6-------------------------

const creator = videoGames.filter((videoGame)=>{
    if (videoGame.Company !== "Ubisoft") {
        return true
    }
});
        
// console.log(creator);


// ------------------------Reduce() ES6-------------------------
// 

const reduceMethod = developers.reduce((accumulator, currentValue)=>{
    return Array.from(new Set([...accumulator,...currentValue.Skills]))
},[]) 

// console.log(reduceMethod);



// ------------------------sort() ES6-------------------------
    const ordenar = points.sort((a,b)=>{
        return a < b
    })
// console.log(ordenar);





// ------------------------find() ES6-------------------------

const encontrar = videoGames.find((videoGame)=>{
    if (videoGame.Company === "Ubisoft") {
        return 1
    }
})
// console.log(encontrar);



// ------------------------some() ES6-------------------------
// si hay un obj que cumpla con la condicion retorna TRUE 
const result = Xbox.some((videoGame)=>{
    if (videoGame === "ForzaHorizon 4") {
        return true
    }
})

// console.log(result);

const result1 = videoGames.some((element)=>{
    if (element.Company ==="CAPCOM") {
        return true
    }
})

// console.log(result1);

// ------------------------every() ES6-------------------------
// todos los elementos del Arr deben cumplir con la condicion para que de true de caso contario False
const cadaJuego = videoGames.every((element)=>{
    if (element.Company.includes("U") ==="Ubisoft") {
        return true
    }
})
// la respuesta sera false, dado que solo 3 obj tienene el company en Ubisoft, por ende da false.
// console.log(cadaJuego);


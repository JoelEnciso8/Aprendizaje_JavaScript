/*
Para exportar un JS file a otro usamos la palabra reservada , 
Export and Import 

*/

console.log("modulo");

// para evitar errores de sintaxsis se debe colocar la ubicacion completa , tal cual aparece en el file donde guardamos .js
// no es necesario llamar todo , solo lo que nesitamos  (Destructurar el codigo)
import saludar,{Saludar, PI,user} from "./constantes.js";
console.log(PI,user);

// Ahora exportaremos funciones de documento aritmetica.js, el cual 

import { operacion } from "./aritmetica.js";
console.log(3+3);

// Import default, este formato se definira de manera default 
// no se altera ni se inmuta, esta se llama de manera normal
saludar()
 let salute = new Saludar()
 salute
//  Exportamos el documento Js de un archivo js sin declarar , este sera exportado en un archivo JS que SI esta declarado 
 export const PI = Math.PI;

//  El metodo Export SOLO EXPORTA LO NECESARIO; SIEMPRE Y CUANDO LA DECLAREMOS Y ESTA ESTE EN NUESTRPO SCOPE
// en este caso exportamos las dos VAR
export let user = "Joel";
 let clave = "12!3";
// creamos una funcion Default 

export default function saludar() {
    console.log("Hola modulos + ESC6");
}


export class Saludar {
    constructor(){
        console.log("Hola  + ESC6");
    }
}
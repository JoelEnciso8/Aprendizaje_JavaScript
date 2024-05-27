// Ejercicios - Tipos de datos (cadena de texto-string) , metodos , loops, 

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separador por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/ 



// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const funcionSimple = (cadena ="")=>{ 
 // Validamos el codigo de tal manera que nos arroje una informacion siendo true or false
//  agregamos length para contar la longitud del string y asi poder arrojar el numero que la conforma
(!cadena)? console.log("No data entered"): console.info(`La cadena ${cadena} tiene } ${cadena.length} Caracteres`);
}


funcionSimple("Soy el mejor")
funcionSimple("")









  //2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

  const recortarText = (cadena ="",longitud = undefined) => {

   // Validamos el codigo de tal manera que nos arroje una informacion siendo true or false
   (!cadena)
   ?console.warn("no text added on, pls submit again.")
   :(longitud === undefined)
   ?console.log("no length added")  

// usamos el metodo .slice(), nos devuelve una pequeña pero profunda copia del origianal en JS se le conoce como
// Start and end represent the index of items
   :console.log(cadena.slice(0,longitud));}


   
   recortarText("Hello World",5)
    recortarText()
    recortarText("Enciso")
    recortarText("",3)






 



        // 3) Programa una función que dada una String te devuelva un Array de textos separados}
        //  por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


    const cadenaFix = (cadena ="",separador = undefined) => 
     {       // Validamos el codigo de tal manera que nos arroje una informacion siendo true or false
         (!cadena)
         ? console.warn("No data entered")
         :(separador = undefined )
         ?console.warn("no entry")
        //  agregamos un metodo, el metodo split, el cual nos separa de un array y divide el objeto de tal manera que este hara su separacion a traves de la cadena en subcadenas
      
         :console.info(cadena.split(separador));
        
        }

        
         cadenaFix("en,feb,mar,apl,may,jun",",");







    // 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.}

       const repeatText = (text ="",veces = undefined)=> {
        // Validamos el codigo de tal manera que nos arroje una informacion siendo true or false
      if (!text) return console.log("No data")
    ;
    if(veces === undefined) return console.warn("not entered a valid text")
    ;
     
    if(veces === 0) return console.log("not 0 allowed");

    if(Math.sign(veces)===-1) return console.log("number cant be negative ");
    // creamos un for loop para poder recorrer el arreglo y asi poder repetir la funcion X cantidad de veces

    for(let i= 1; i <= veces;i++) console.log(`${text},${i}`);
  
  }

  repeatText("JOel Enciso",-10)
  repeatText("",1)
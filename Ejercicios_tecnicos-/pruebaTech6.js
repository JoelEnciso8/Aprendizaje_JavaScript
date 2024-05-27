/**
 *18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. 
 
 **/ 










//  *18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. 

const contarVocalesYConsonantes = (cadena ="") => {
    // validamos el codigo con if y typeof 
    if(!cadena) return console.info("El campo está vacío, ingresa una frase");
    if(typeof cadena !=="string") return console.info(`El valor "${cadena}" no es una cadena de text, ingresa la informacion de nuevo, porfavor.`);
    
// .split() divide el objeto en un array mediante la separacion de subcadenas
cadena.split()

// declaramos los contadores 
let vocales = 0,
 consonantes =0;

// regEx la cual nos ayudara a indentificar si es una vocal o no, agregamos test() para identificar que el regExp funcione
    let regExvocal =/[aeiouáéíóú]/gi.test(cadena)

    cadena = cadena.toLocaleLowerCase()

    // iteramos sobre cada caracter con un for loop

    for ( let caracter of cadena){
        if (regExvocal.test(caracter)) {
            vocales++
        } else if( caracter=> 'a' && caracter <= 'z')
        // verificamos si es una consonante (caracter)
        consonantes++
    }
    
// Retornamos un objeto, el cual nos brinda una visual mas clara de lo que hicimos en el codigo. 
    return console.log({
        "oracion":cadena ,
        "cantidad de vocales":vocales,
        "cantidad de consonantes":consonantes
    });
}
  

// contarVocalesYConsonantes("Soy La MONDA, y yo se que puedo hacer las cosas")






// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const nombreReal = (nombre ="")=>{
    if(!nombre) return console.info("El campo está vacío, ingresa una frase");
    if(typeof nombre !=="string") return console.info(`El valor "${nombre}" no es una cadena de text, ingresa la informacion de nuevo, porfavor.`);
                 
    let regExNombre = /^[a-zA-ZÑñÀaeiouáéíóúü\s']+$/g.test(nombre); 

    return (regExNombre)?console.log(`${nombre} es un nombre valido. `):console.log(`${nombre} NO es un nombre valido.`);

}
    
// nombreReal("")
// nombreReal("michael oñate,tiene 19.")
// nombreReal("michael oñate")



// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. 

const emailValido = (email ="")=>{
if(!email) return console.info("El campo está vacío, ingresa una frase");
if(typeof email !=="string") return console.info(`El valor "${email}" no es una cadena de text, ingresa la informacion de nuevo, porfavor.`);


const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)

return (regex) ?console.log(`${email} es un email valido`):console.log(`${email} NO es un email valido`);
}

// emailValido("joelenciso08@outlook.com")
// emailValido("joel,enciso08@outlook.co")
// emailValido("joElenciso08@outlook.co")





// Combinando nombre y Email ejercicio

const validarPatron =(cadena ="" , patron ="")=>{
    if(!cadena) return console.info("El campo está vacío, ingresa una frase");
    if(typeof cadena !=="string") return console.info(`El valor "${cadena}" no es una cadena de text, ingresa la informacion de nuevo, porfavor.`);
   
    if(patron === undefined) return console.info("El campo está vacío, ingresa una frase");
    if(!(patron instanceof RegExp)) return console.info(`El valor "${patron}" no es una cadena de texto, ingresa la informacion de nuevo, porfavor.`);
   
        const regEx = patron.test(cadena)
            return (regEx) ? console.log(`${cadena} cumple con el patron ingresado`):console.log(`${cadena} No cumple con el patron ingresado.`);

}

validarPatron("joel Enciso", /^[a-zA-ZÑñÀaeiouáéíóúü\s']+$/g)
validarPatron("joelenciso@gmail.com",/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)
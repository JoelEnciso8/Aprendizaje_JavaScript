/**
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */


// Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binarioaDecimal = (numero = undefined,base = undefined) => {
    if(numero === undefined) return console.error("El numero Binario ingresado No es valido, Ingreselo de nuevo.");    

    if(typeof numero !== "number") return console.error(`El Numero binario "${numero}" No es valido, Ingreselo de nuevo.`);  
    if(base === undefined) return console.error("La base no esta definida, Ingreselo de nuevo.");    

    if(typeof base !== "number") return console.error(`la Base "${base}" No es valido, ingreselo de nuevo`);

// Function binaria 
// if (base !== 2 && base !== 10) {
//     console.error("La base ingresada no es válida. Por favor, ingresa 2 para binario o 10 para decimal.");
//     return;
// }

if (base === 2) {
    console.info(`El número ${numero} base ${base} = ${parseInt(numero, base)} base 10`);
}else if(base === 10){
    console.info(`El número ${base} base ${numero} = ${numero.toString(base)} base 2`);
}
}
binarioaDecimal()
binarioaDecimal("2");
binarioaDecimal(100)
binarioaDecimal(100,"2")
binarioaDecimal(100,2)
binarioaDecimal(20,10)






// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
//  pe. miFuncion(1000, 20) devolverá 800.

const input = (monto = undefined , descuento = 0) => {
    
    // Validations

if(monto === undefined) return console.error("El monto No es valido, Ingreselo de nuevo.");    

if(typeof monto !== "number") return console.error(`El monto "${monto}" No es valido, Ingreselo de nuevo.`);    

if(monto === 0) return console.error("no puede ser 0 el monto");


if(Math.sign(monto) === -1) return console.error("No puede se negativo el monto, ingrese uno nuevo");

if(typeof descuento !== "number") return console.error(`El valor ${descuento} NO ES NUMERO Ingresa de nuevo`);



    // Funcion descuento
    return console.log(`${monto} - ${descuento} % = ${(monto*descuento)/100}`);
}

input()
input("200")
input(0)
input(-1)
input(10,"2")
input(35)
input(350.000,50)








// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
//  pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calculateYear = (fecha = undefined ) =>{
    // validamos que nos de la informacion que requerimos 

    if(fecha === undefined) return console.log("Invalid DateType.");

    // Vamos a validar con el operador instanceOf, el cual nos ayuuda a validar las instancias o prototype
        // el obj Date representa un momento fijo en el tiempo, desde l 1 de Enero de 1970 UTC
    if(!(fecha instanceof Date)) return console.log("Invalid Date added");

    // Function 

    // getTime() devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.
    // Aqui se creo la variable en milisegundos
    let newDate =new Date().getTime() - fecha.getTime()
    
    // crear variable con el tiempo que deseamos expresar ( esta expresado en un dia , segundos, minutos, hora, dia, y año)
    yearMS= 1000 * 60 * 60 * 24 * 365
    yearHumans = Math.floor(newDate/yearMS);


    return (Math.sign(yearHumans)===-1) 
    // math.abs() El valor absoluto del número dado.
    ? console.info(`falta ${Math.abs(yearHumans)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(yearHumans)===1) 
    ? console.info(`Han pasado ${yearHumans} años , desde ${fecha.getFullYear()}`)
    :console.info(`NO hay diferencias, estamos en el año actual ${fecha.getFullYear()}`);
}

calculateYear()
calculateYear("")
calculateYear(new Date(2020,10,8))
calculateYear(new Date())

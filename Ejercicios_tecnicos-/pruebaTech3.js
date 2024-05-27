/**
 
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
 pe. miFuncion(5) devolverá 120


 */

//  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// para esta funcion basta con un math.round(math.random()*100) el cual ayudara a rendonear 
// el valor que estamos ingresando, asimismo nos dara un numero aleatorio tal y como lo pedimos, 
// con un rango del 501-600, este valor lo multiplicamos por el math random que nos esta dando, 
// y luego lo sumamos por le valor que deseamos consultar


   const randomNumber = () => {console.log(Math.round(Math.random()*100)+500);}

   randomNumber()







//  Programa una función que reciba un número y evalúe si es capicúa o no 

const capicua = (numero = 0) => {

    // Validamos la informacion con un if 
    if (!numero) return console.info("No es un número");

    // usando el operador typeof que devuelve una cadena del tipo del operando sin antes evaluarlo
    if(typeof numero !== "number")return console.error(`el valor ${numero} No es un numero`);


    // usamos el metodo toString() para convertir en string todo objeto que se represente como un valor de texto

    numero = numero.toString()

    let numeroToString =numero.split('').reverse().join('');

    return (numero === numeroToString)
        ? console.log(`Sí es capicúa: ${numero}, porque se lee ${numeroToString}`)
        : console.log(`No es capicúa: ${numero}, porque se lee ${numeroToString}`);

}

capicua(2002)
capicua(2.6)
capicua(20.9)






//  Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
// pe. miFuncion(5) devolverá 120


const factorial = (n = undefined)=> {
        // Validamos la informacion con un if y undefined el cual nos dara el resultado undefined si no cumple con las caracteristicas del codigo
        
    if (n === undefined) return console.error("No es un numero");;

    // usamos typeof el cual nos ayudara a identificar el tipo de valor que queremos agg y que nos lea el codigo
    if(typeof n !== "number") return console.log(`El valor ${n} ingresado No es un numero`);
    if(n === 0) return console.error("El numero no puede ser 0");
    // agg math.sign()retorna el signo de un número, indicando si el número es positivo, negativo o cero.
    if(Math.sign(n)=== -1) return console.error("El numero no puede ser negativo");

    // creamos una var con el valor 1 con el fin de agg en el for loop y que este nos de el 
/*Factorial : el factorial de un número es el producto de todos los enteros positivos menores o iguales a ese número. 
Se denota con el símbolo "!" y se calcula multiplicando el número por todos los enteros positivos menores que él.
5! = 5 × 4 × 3 × 2 × 1 = 120
 */ 

    let factorial= 1;
    for (let i = n; i > 1; i--) {
        factorial *=i;
        
    }

    return console.log(`El factorial ${n} es ${factorial}`);
}
factorial(5)
factorial(0)
factorial("")
/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/


// /*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
//  pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].



const elevadoAlCuadrado = (arr = undefined)=>{
    // validation of the code
    if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
    if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
   
    // function for Of, nos ayuda a validar solo numeros

    for (const num of arr) {
        if(typeof num !=="number") return console.log(`el valor ${num} no es un numero valido`);;
    }

    // para crear dichoa array elevado al cuadrado creamos un metodo map() el cual crea 
    // un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    const newArr = arr.map(el => el *el);

    return console.log(`El arreglo original ${arr}.\nArreglo elevado al cuadrado ${newArr}`);


}
// output

// elevadoAlCuadrado([])
// elevadoAlCuadrado([""])
// elevadoAlCuadrado([60,20])














// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 
const numeroMasAltoAlMasBajo =(arr = undefined)=>{

    // validaciones con if 
    if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
    if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
   
    // function for Of, nos ayuda a validar solo numeros

    for (const num of arr) {
        if(typeof num !=="number") return console.log(`el valor ${num} no es un numero valido`);;
    }

    // validamos que el array nos de el numero deseado usando math.max() el cual nos dara un numero max de un array 
    // y tambien math.min() que devuelve el numero menor de un array , sin antes agregar el spread operator "..." dado que sin este operador
    // el resultado sera NaN

    console.log(`Arreglo Original: ${arr}.\n Valor Mayor: ${Math.max(...arr)}.\nValor Menor : ${Math.min(...arr)}`);

        
}

// output

numeroMasAltoAlMasBajo()
numeroMasAltoAlMasBajo(false)
numeroMasAltoAlMasBajo([])
numeroMasAltoAlMasBajo([1, 4, 5, 99, -60])






// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
//  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/


const paresEImpares = (arr = undefined) => {
      // validaciones con if 
      if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
      if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
     
      // function for Of, nos ayuda a validar solo numeros
  
      for (const num of arr) {
          if(typeof num !=="number") return console.log(`el valor ${num} no es un numero valido`);;
      }


    //Function parEimpar, para calcular se debe dividir entre dos y que el modulo de este sea 0 (par) en caso contrario debe ser el modulo igual a 1 (impar)
      return console.log({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
        })

}
// output

// paresEImpares()
// paresEImpares(false)
// paresEImpares([true])
// paresEImpares([20,10,7,9,1,9,])

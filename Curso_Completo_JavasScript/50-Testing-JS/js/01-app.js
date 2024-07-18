// probando valores en testing 

function suma(a,b) {
    return a +b
}

let resultado = suma(1,2);
let esperado = 3;

expected(esperado).toBe(resultado)



function resta(a,b) {
    return a - b
}

 resultado = resta(10,5);
 esperado = 10;

 expected(esperado).toBe(resultado)

 expected(esperado).toEqual(resultado)


// 


// creando fn que nos diga el numero esperado 

function expected(esperado) {
    return{
        toBe(resultado){
            return resultado !== esperado ? console.error(`El ${resultado} es el Numero esperado`): console.log(` es el resultado esperado`);
        },
        toEqual(resultado){
            return resultado !== esperado ? console.error(`El ${resultado} es el Numero esperado`): console.log(` es el resultado esperado`);

        }
    }
}

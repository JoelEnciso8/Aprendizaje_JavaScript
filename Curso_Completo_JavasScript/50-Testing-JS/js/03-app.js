// probando valores en testing 

function suma(a,b) {
    return a +b
}


function resta(a,b) {
    return a - b
}


// async para dar la fn test
async function sumaAsync(a,b) {
    return Promise.resolve(suma(a,b))
}


let resultado = suma(1,2);
let esperado = 3;
expected(esperado).toBe(resultado)



 resultado = resta(10,5);
 esperado = 10;

 expected(esperado).toBe(resultado)
 expected(esperado).toEqual(resultado)




test('Suma 10 + 20 el resultado debe ser 30 ', async ()=>{
    const resultado = await sumaAsync(10,20);
    const esperado = 0;
    expected(esperado).toBe(resultado);
})


// async test

async function test(mensaje,callback) {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecuto correctamente`);
    } catch (error) {
        console.log('Error');
        console.log(error);
    }
}


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

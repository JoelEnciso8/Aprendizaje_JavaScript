let result;

/*Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
No es un objeto de función.*/ 

// PI

result = Math.PI;


// Redondear 
result = Math.round(2.6)
result = Math.round(2.2)
result = Math.round(2.4)

// Redondear hacia Arriba
result = Math.ceil(2.1)

// Redondea hacia Abajo
result = Math.floor(3.1)


// Valor Abs 

result = Math.abs(500)

// Potencia

result = Math.pow(2,6)

// Si queremos agregar un minimo

result = Math.min(4,5,1,-1,9,-10)

// random nos brinda # random 

result = Math.random() *20;

// combinando metodos, en este caso random y floor nos da un valor que sea randomm del 0 al 30

result = Math.floor(Math.random()*30)


console.log(result);


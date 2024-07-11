// firstClass Function arrow fn
const suma = (a,b) =>a+b; 
// firstClass Function arrow fn
const multiplicar = (a,b) =>a*b;
// variable to return
const sumaOMultiplicarOutput = fn => fn (10,20);

console.log(sumaOMultiplicarOutput(suma)); // we add the variable into the fn that we want to prove
console.log(sumaOMultiplicarOutput(multiplicar)); // we add the variable into the fn that we want to prove
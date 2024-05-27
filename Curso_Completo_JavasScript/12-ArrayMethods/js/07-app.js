const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2  = ['Agosto','Octubre'];
const meses3  = ['Noviembre', 'Diciembre'];

const result = meses.concat(meses2)
console.log(result);

// spreadOperator ... 

const result2 = [...meses, ...meses2,...meses3]

console.log(result2);
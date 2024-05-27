// Distructuring

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true,
 
};

const {Nombre} = producto;
console.log(Nombre);

// Distructuring con arrays

const num = [20,30,40];
const [primer, segundo, ...tercero] = num;
console.log(tercero);
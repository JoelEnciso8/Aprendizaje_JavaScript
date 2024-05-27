// Setter , Set y sus caracteristicas

// Permite crear una lista de valores sin duplicados 
// crea un Array
// cap Sensitive

const carrito = new Set();

//Usa su propia sintaxis (Metodos)
carrito.add('Camisa') 
carrito.add('camisa1')
carrito.add('camisa2')
carrito.add('camisa3')
carrito.add('camisa35')
// Set es iterable 

carrito.forEach(elem =>{
    console.log(elem);
});

// pásando un foreach nos mostrara cada uno de los elementos registrados con add


const duplicados =[10,20,30,40,50,10,20,30,60,70,80,10,90,100];

const noDuplicados = new Set(duplicados);
console.log(noDuplicados);

// carrito.delete('camisa1')
// carrito.clear()
console.log(carrito.has('perro'));


// Iteraciones
console.log(carrito);
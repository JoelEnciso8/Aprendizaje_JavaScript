// for (let i = 0; i < 10; i++) {
// if (i === 5) {
//      console.log("CINCO");
//     // break, detiene el forloop y vitamos loop
//      continue;
// }    
// console.log(` Numero ${i}`);

// }

const producto = [{
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true,

},
 {
    Nombre: "Celular",
    Precio: 1000,
    Stock: true,
 
},
 {
    Nombre: "Keyboard",
    Precio: 1700,
    offer: true,
 
},
]

for (let i = 0; i < producto.length; i++) {
    if (producto[i].offer) {
        console.log(`El Articulo ${producto[i]} tiene descuento`);
    }
    console.log(producto[i].Nombre);
    
}
// Iteradores, se cumpliran hasta que una funcion se cumpla o se deje de cumplir 


// for loop: se ejecuta hasta que el codigo deja de complir la funcion

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
    Stock: true,
 
},
]


for (let i = 0; i < producto.length; i++) {
    console.log(producto[i].Precio);
}
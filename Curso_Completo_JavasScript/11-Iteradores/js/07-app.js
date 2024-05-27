
const pendientes = ["tarea", "comer","Estudiar"]

const producto =[ 
{Nombre: "TV 55 Pulgadas", Precio: 200,},
{Nombre: "Celular",Precio: 1000},
{Nombre: "Keyboard",Precio: 1700,Stock: true}
];


// for of - itera sobre un elemento de arreglo , no sobre los indicies

for (const pendiente of pendientes) {
    console.log(pendiente);
}

for (const carrito of producto) {
    console.log(carrito.Precio);
}
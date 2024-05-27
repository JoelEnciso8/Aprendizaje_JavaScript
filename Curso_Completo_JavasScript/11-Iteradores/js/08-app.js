
const pendientes = ["tarea", "comer","Estudiar"]

const producto =[ 
{Nombre: "TV 55 Pulgadas", Precio: 200,},
{Nombre: "Celular",Precio: 1000},
{Nombre: "Keyboard",Precio: 1700,Stock: true}
];

const obj = {
    modelo:1009,
    year:2020,
}

// for In - itera para obj

for (const pendiente in pendientes) {
    console.log(pendiente);
}

for (const carrito of producto) {
    console.log(carrito.Precio);
}

for (const hondaSub in obj) {
    if (obj.hasOwnProperty.call(obj, hondaSub)) {
        console.log(obj[hondaSub].modelo);
        
    }
}
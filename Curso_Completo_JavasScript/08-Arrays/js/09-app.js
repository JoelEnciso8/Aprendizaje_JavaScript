
// ForEach Array

const carrito = [
    {Nombre: "TV",Precio: 800},
    {Nombre: "Ordenador",Precio: 900},
    {Nombre: "Tablet",Precio: 200},
    {Nombre: "Xbox",Precio: 500},
    {Nombre: "HDMI",Precio: 600},
    {Nombre: "Keyboard ",Precio: 100},

];




for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].Nombre} - ${carrito[i].Precio}`);
    
}

// Foreach recorre el array mostarndo sus valores de manera individual 

carrito.forEach((elem)=>{
    console.log(`${elem.Nombre} - ${elem.Precio}`);
})
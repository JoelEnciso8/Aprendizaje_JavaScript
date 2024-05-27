// Metodo Map

const carrito = [
    {Nombre: "TV",Precio: 800},
    {Nombre: "Ordenador",Precio: 900},
    {Nombre: "Tablet",Precio: 200},
    {Nombre: "Xbox",Precio: 500},
    {Nombre: "HDMI",Precio: 600},
    {Nombre: "Keyboard ",Precio: 100},

];


// DIF entre MAP Y FOREACH

// Foreach recorre el array mostarndo sus valores de manera individual 
 carrito.forEach((elem)=>{
    return  console.log(`${elem.Nombre} - ${elem.Precio}`);
})

// Map. te crea un arreglo nuevo llenando una nueva variable 

const nuevo = carrito.map((elem)=>{
   return `${elem.Nombre} - ${elem.Precio}`;
})


console.log(nuevo);

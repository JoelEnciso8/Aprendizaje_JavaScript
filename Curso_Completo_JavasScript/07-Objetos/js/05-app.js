
// Object Literal

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true,
    info:{
        size: "20Cm",
        weight: "2Kg"
    },
    country:{
        country: "Colombia",
        ensambled:"China"
    }
};
// Los objetos agrupan todo en una sola variable... 


console.log(producto.info.size);
console.log(producto.country.ensambled);
console.log(producto.country.country);


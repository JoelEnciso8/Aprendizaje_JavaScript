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
        pais: "Colombia",
    }
};
// Los objetos agrupan todo en una sola variable... 

// haciendo Distructuring de un object grande

const {Nombre, info, info: {country, country:{ pais}}} = producto;


console.log(Nombre);
console.log(info);
console.log(country);
console.log(pais);


// console
// console.log(info);

// console.log(producto.info.size);
// console.log(producto.country.ensambled);
// console.log(producto.country.country);


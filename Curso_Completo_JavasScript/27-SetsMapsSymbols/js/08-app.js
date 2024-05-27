const city =['london','colombia','madrid'];
const ordenesDecompra = new Set([123,321,102]);
const datos = new Map();


datos.set('nombre','Joel Steve');
datos.set('Profesion','Contractor International');



for (const ciudades of city) {
    console.log(ciudades);
}
for (const orden of ordenesDecompra) {
    console.log(orden);
} // iterador por default de un arr seria values()
for (const dato of datos) {
    console.log(dato);
} // iterador por default de map seria entries()


// for (let key of city.keys()) { // the keys of arr always will be the i 
//     console.log(key);
// }

// for (let key of ordenesDecompra.keys()) {
//     console.log(key);
// }

// for (let dato of datos.keys()) {
//     console.log(dato);
// }



// for (let value of city.values()) {
//     console.log(value);    
// }

   
// for (let entry of city.entries()) {
//     console.log(entry);
// }


// for (let entry of datos.keys()) {
//     console.log(entry);
// }
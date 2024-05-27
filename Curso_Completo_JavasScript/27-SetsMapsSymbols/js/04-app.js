// weakmap-map API could be implemented 
// in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. 


const producto = {
    idProducto:!0
}

const weakmap = new WeakMap();
weakmap.set(producto,'Monitor');

// console.log(weakmap.has(producto));
// console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
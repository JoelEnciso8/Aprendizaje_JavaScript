// WeakSet - A WeakSet is a collection of garbage-collectable values, 
// including objects and non-registered symbols. A value in the WeakSet may only occur once. It is unique in the WeakSet's collection


const weakSet = new WeakSet(); // Solo se pueden pasar objetos , no arr, no class 


const client = {
    nombre: 'joel',
    deuda: 900
}


weakSet.add(client);
console.log(weakSet.has(client));
// Funciona de la misma manera que Set, mismos metodos
// .size no es valido en weakSet, no es iterable, no almacena todo tipo de valor solo objetos
 
// Symbols. most used in libraries, 
// to create Symbol just the word called the fuction 
// Symbol is a built-in object whose constructor returns a symbol primitive — also called 
// a Symbol value or just a Symbol — that's guaranteed to be unique. 

const sym = Symbol('1');
const sym2 = Symbol('1');


    // console.log(Symbol() === Symbol());

    const nombre = Symbol('');
    const apellido = Symbol('');

    const humano = {};

// Agg nombre como llave del obj 

humano[nombre] = 'Joel Steve';
humano[apellido] = 'Enciso Bravo';
humano.membresia = 'Golden Plus';
humano.monedasCanjeables = 1000;


    // console.log(humano);

// Las propiedades que usa  Symbol NO SON ITERABLES , cuando creas un Symbol puedes definir una description




const cliente = Symbol('Nombre del Cliente');
const clienteValor = {};
clienteValor[cliente] = 'Owen Daniel Enciso Pereira';

console.log(clienteValor);

// Map, son listas de llave y valor 
// Map_ Aceptan todo tipo de datos y se pueden recorrer dentro de un arreglo
// Map Funciona igual que un Set usando los metodos y vairables 

const cliente = new Map(); // puede inizializar sin valores 


cliente.set('nombre','Joel'); // estabelece el codigo y lo que quiere que lleve agg 
cliente.set('cuenta',4000);

console.log(cliente.size);// el index de  un valor en un map (valores existentes)
console.log(cliente.has('nombre'));// obtienes  un valor creado (valores existentes)
console.log(cliente.get('cuenta')); // Obteneiendo un valor en un map (valores existentes)

// cliente.clear();
// console.log(cliente);

// ----------------map con valores-----------



const paciente = new Map([['Nombre','Paciente'], ['cuarto','No definido']]);

paciente.set('Doctor','Dr Asignado')   
paciente.set('Nombre','Joel Enciso')


console.log(paciente);

paciente.forEach((datos, index) =>{
    console.log( index);
})
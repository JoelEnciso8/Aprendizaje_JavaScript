 
 function sumar(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b
}
// con mencionar EXPORT teniendo function adelantes,
//  esta tomara en cuenta las funciones previas y las cuales importara
export const operacion ={
    sumar,
    restar
};
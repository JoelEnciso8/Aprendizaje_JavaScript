// fn que retornan una fn 
const obtenerCliente =() => () => console.log('Joel Enciso');

const fn = obtenerCliente()
fn()
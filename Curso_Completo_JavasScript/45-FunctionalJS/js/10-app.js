// Aplicando currying y partials 

// const suma = (a,b,c) => a + b+ c;

// const parcial = (a) =>(b)=> (c) => suma(a,b,c);

// const resultado = parcial(5)(4)(3);

// console.log(resultado);

// arrow fn se define arriba 
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const saveEmail = info => ({
    agregarEmail(email){
        console.log(`guardando email: ${email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Mi empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.position}`);
    }
})

// composition alternativa a las clases
function Cliente(nombre, email,empresa) {
    // syntaxsi
    let info ={
        nombre,
        email,
        empresa
    }
    // devolvemos el objt con el value  
    return Object.assign(
        // la variable que creamos let info ={}
        info, 
        obtenerNombre(info),
        saveEmail(info),
        obtenerEmpresa(info)
    )

}

function Empleado(nombre, email,position) {
    let info= {
        nombre,
        email,
        position
    }
    return Object.assign(
        // la variable que creamos let info ={}
        info, 
        obtenerNombre(info),
        saveEmail(info),
        obtenerPuesto(info)
    )
}





const cliente = Cliente('CODE designed',null,'Codigo Con juuan');
cliente.mostrarNombre()
cliente.agregarEmail('cliente@cleite.com')
cliente.mostrarEmpresa()

console.log('=========================');

const empleado = Empleado('Joel Enciso Bravo',null,'Software Engineer')
empleado.mostrarNombre()
empleado.agregarEmail('empleado@crack.com')
empleado.mostrarPuesto()
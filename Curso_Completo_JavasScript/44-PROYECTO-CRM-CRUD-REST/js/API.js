// Abri json server npx json-server --watch db.json --port 4000
// http://localhost:4000/clientes


const URL = 'http://localhost:4000/clientes';

// cuando se cra un nuevo cliente 
export const nuevoCliente = async cliente => {

    try {

      await fetch(URL,{
            method:'POST',
            body:JSON.stringify(cliente),
            headers: {
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }



}


// obtener todo los clientes
export const obtenerClientes = async () =>{
    try {
     const resultado = await fetch(URL);
     const clientes = await  resultado.json();
     return clientes;     

    } catch (error) {
        console.log(error);
    }
}
// eliminando cliente

export const eliminarCliente = async id =>{


    try {
        
        await fetch(`${URL}/${id}`,{
            method:'DELETE'
        });



    } catch (error) {
        console.log(error);
    }
}


// obtiene un cliente por su ID 
export const obtenerCliente = async id=>{
    try {
        const resultado = await fetch(`${URL}/${id}`)
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// actulaizar registro
export const editarCliente =async  cliente =>{
console.log(cliente);

try {
   await fetch(`${URL}/${cliente.id}`,{
        method: 'PUT',
        body: JSON.stringify(cliente),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    window.location.href ='index.html';
} catch (error) {
    console.log(error);
}
}
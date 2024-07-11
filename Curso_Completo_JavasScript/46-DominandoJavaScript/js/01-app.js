// scope 

const cliente = 'Juan';

function mostrarCliente() {
    // dentro del Scope
    const cliente = 'Joel';
    console.log(cliente); // scope dentro de la fn 
}

// fuera del scope
mostrarCliente()
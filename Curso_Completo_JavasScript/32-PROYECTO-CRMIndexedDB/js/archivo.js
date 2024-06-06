
function conectarDB() {
    const abrirContent = window.indexedDB.open('crm',1);

    abrirContent.onerror = function () {
        console.log('one Error');
    };

    abrirContent.onsuccess =function () {
        DB = abrirContent.result;
    }
}

function imprimirAlerta(mensaje,tipo) {

    const alerta = document.querySelector('.alerta');
    if (!alerta) {
        
    
    // crear alerta
    const alert = document.createElement('div');
    alert.classList.add('px4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','border','alerta');

    if (tipo === 'error') {
     alert.classList.add('bg-red-100','border-red-400','text-red-600')   
    }else{
        alert.classList.add('bg-green-100','border-green-400','text-green-600')

    }

    alert.textContent = mensaje

    formulario.appendChild(alert)

    setTimeout(() => {
        alert.remove()
    }, 1000);
}
}


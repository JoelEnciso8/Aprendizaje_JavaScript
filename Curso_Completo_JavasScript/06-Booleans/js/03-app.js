/*Booleans que es: Son dos valores True or False, se pueden asociar a variaciones que se pueden realizar sobre validaciones de preguntas cerradas, */

// creando Booleans, consejos para tener en cuenta y buenas practicas

// si vamos a comparar con if statement, a menos que lo tengamos por implicito no usamos autenticado == true;
// if (autenticado) {
    //     console.log('Autenticado, Puede ingresar');
    // } else {
        //     console.log('Acceso Denegado');
        // }
        
        
        
        
        
        const autenticado = true;
        // Operador ternario 
        // Simplifica la linea de codigo en cuanto a rendimientos cortos 
        console.log(autenticado ?'Puede Ingresar al modulo': 'No puede ingresar al modulo') ;
//
// Generando HTML Desde JS 

// creando un Enlace_________________________
const enlace = document.createElement('A'); // create element nos ayuda a crear HTML elements usando las etiquetas
    enlace.textContent = 'Nuevo Enlace'; // Agregamos el Texto que queremos definir.

    enlace.href = '/nuevo-enlace'; // agregando href :returns a string containing the whole URL
    enlace.target = "_blank"; //agregando target: s
    enlace.setAttribute('data-enlace', 'nuevo-enlace')
    enlace.classList.add('alguna-clase')
    enlace.onclick = miFuncion;//creamos el atributo onclick 
    console.log(enlace);

// Navigation_________________________
        // Seleccionando class navegacion del HTML 
        const navegacion = document.querySelector('.navegacion');
            navegacion.appendChild(enlace); // appendChild() enlazará el href que creamos al final de nuestro elemento

                // console.log(navegacion.children);
            // para tener mas control
            navegacion.insertBefore(enlace, navegacion.children[1]);  //insertBefore lo posiciona antes y agregarmos el enlance junto al navegacion.children, indentificando el index en que deseamos posicionarlo.


// creamos una alerta que cuando clicked it Nuevo Enlace pop up in the screen and then continue
    function miFuncion() {
        alert('Diste Click')
    }

//

    // Creando un nuevo Card__________________________________________________________



    const parrafo1 = document.createElement('P');
        parrafo1.textContent= 'concierto';
        parrafo1.classList.add('categoria', 'concierto');

    const parrafo2 = document.createElement('P');
        parrafo2.textContent =' Concierto De Rock Cristiano';
        parrafo2.classList.add('titulo')


    const parrafo3 = document.createElement('P');
        parrafo3.textContent= '$200 ';
        parrafo3.classList.add('precio')


            // Creando un div de info
            const info = document.createElement('div');
                info.classList.add('info')    
                info.appendChild(parrafo1)    
                info.appendChild(parrafo2)    
                info.appendChild(parrafo3)    

                    console.log(info);

                // creando img
                const img = document.createElement('img');
                img.src ='img/hacer2.jpg'

                // creando card 
                const card = document.createElement('div');
                card.classList.add('card');

                // asignando img
                card.appendChild(img);

                card.appendChild(info);

                    // insertar en el html el card previamente creado

                    const contenedor = document.querySelector('.hacer .contenedor-cards');
                    contenedor.insertBefore(card, contenedor.children[1]);


// Traversing the DOM ,JS esta conectado por document lo cual recorre el JS


const navegar = document.querySelector('.navegacion');
    console.log(navegar.firstElementChild);
    console.log(navegar.lastElementChild);
    // firstElementChild. nos trae el primer elemento
    // lastElementChildnos trae el ultimo elemento



    // console.log(navegar);
    // console.log(navegar.childNodes);//los espacios en blanco son conciderados elementos
    // console.log(navegar.children);//Te alista elementos reales


    // console.log(navegar.children[1].nodeName);
    // console.log(navegar.children[1].nodeType);
// _______________________________________________________________________________________________________________
    // Para investigar: 
    /*
    nodeName
    nodeType
    */ 


    // explorando el DOM y cambiando img accediendo mediante children a los elementos 
    const img = document.querySelector('.card');
        // img.children[1].children[1].textContent ='Nuevo Concierto'

        // img.children[0].src ='img/hacer4.jpg' 
        //  console.log(img.children[0]);

        // con parentNode and parentElement podemos acceder al father del elemento
    
    // console.log(img.parentNode);
    // console.log(img.parentElement);

    // console.log(img);    // Al acceder al card del HTML estamos accediendo al primer card por default

    // console.log(img.nextElementSibling); // para poder acceder a los demas cards usamos nextElementSibling esto nos lleva al siguiente
    
    // // para acceder al ultimo card de manera invertida podemos usar la siguiente expresion 

    // const ultimoCard = document.querySelector('.card:nth-child(4)')
    // console.log(ultimoCard);
    // console.log(ultimoCard.previousElementSibling);
    // //  estos metodos nos ayudan a ubicarnos en los diferentes elementos que estemos recorriendo, ambas maneras son buenas practicas


    
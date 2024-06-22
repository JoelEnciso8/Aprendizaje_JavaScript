// const { disconnect } = require("process");

// const { title } = require("process");

//iniciando el project con una funcion 
function iniciarApp () {
    const resultado = document.querySelector('#resultado')
    
    const selectCategories = document.querySelector('#categorias');

    if (selectCategories) {
        selectCategories.addEventListener('change',seleccionarCategoria)
        obtenerCategoria()
    }

    // mostrando Favoritos
    const favoritoDiv = document.querySelector('.favoritos');
    if (favoritoDiv) {
        obtenerFavoritos()
    }



    // initializing modal
    const modal = new bootstrap.Modal('#modal',{}); // el scr bootstrap nos muetra el modal floating para poder revisar la aplicacion



 

    // Agregamos nuestro primer endPoint https://www.themealdb.com/api/json/v1/1/categories.php
    function obtenerCategoria() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarCategories(resultado.categories))//categories es el nombre de nuestra API
    }


    function mostrarCategories(categorias =[]) {
        categorias.forEach(categoria => {
            const option = document.createElement('OPTION') //cuando usamos createElement se recomienda usar Uppercase para mejor lectura
            option.value = categoria.strCategory; // me muestra el valor 
            option.textContent = categoria.strCategory; // me muestra el valor en el website 
            selectCategories.appendChild(option) // agreagmos el appendchild para que muestre el resultado final de esta fn
            // console.log(option);
            
        });

    }


    // agregando nuestro segundo Endpoint  https://www.themealdb.com/api/json/v1/1/filter.php?c=
    function seleccionarCategoria(e) {
        const categoria = e.target.value; // nos muestra la categoria a seleccionar
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}` // URL de la API que vamos a ejecutar en el HTML
        fetch(url) // Muestra la URL que vamos a trabajr 
        .then(respuesta => respuesta.json())
        .then(resultado=> mostrarRecetas(resultado.meals)) // meals, es el nombre de nuestra API
    }



    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado)


        const heading = document.createElement('H2');
        heading.classList.add('text-center','text-black','my-5')
        heading.textContent = recetas.length ? 'Results you may like ' :'Sorry No result';
        resultado.appendChild(heading)

        // Iteramos sobre cada receta que nos aparece en nuestro Arr
        recetas.forEach(element => {
            const {idMeal,strMeal,strMealThumb} = element

            // creamos el elemento DIV 
            const recetaContenedor = document.createElement('DIV')
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card','mb-4')

            const recetaImage = document.createElement('IMG');
            recetaImage.classList.add('card-img-top')
            recetaImage.alt = `Imagen de la receta ${strMeal ?? element.title}`
            recetaImage.src = strMealThumb ?? element.img;
            
            const cardBody = document.createElement('DIV');
            cardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title','mb-3');
            recetaHeading.textContent = strMeal ?? element.title;

            const recetaBtn = document.createElement('BUTTON');
            recetaBtn.classList.add('btn','btn-danger','w-100');
            recetaBtn.textContent = 'Show recipe';
            // recetaBtn.dataset.bsTarget = '#modal'
            // recetaBtn.dataset.bsToggle = 'modal'

            recetaBtn.onclick = function () {
                seleccionarReceta(idMeal ?? element.id)
            }


            // console.log(recetaBtn);// we use log to prove on the terminal if the code works 
            // render in  HTML in order to be seen 
            cardBody.appendChild(recetaHeading)
            cardBody.appendChild(recetaBtn)
            
             
            recetaCard.appendChild(recetaImage)
            recetaCard.appendChild(cardBody)

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor)

        });

    }


// Agregnado nuestro tercer endpoint 
    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarRecetaModal(resultado.meals[0]));
    }
// mostrarRecetas(resultado.meals));


// se encargara de mostrar la ventana modal para ver la receta 
function mostrarRecetaModal(receta) {
    // console.log(receta);

    const {idMeal,strMeal,strInstructions,strMealThumb} = receta; 
    const modalTitle = document.querySelector('.modal .modal-title')
    const modalBody = document.querySelector('.modal .modal-body')
    const modalFooter = document.querySelector('.modal .modal-footer')

    modalTitle.textContent =  strMeal
    modalBody.innerHTML = `
        <img class ='img-fluid' src ="${strMealThumb}" alt ="receta ${strMeal}">
        <h3 class="my-3">Instructions</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredients and Measures</h3>

     `;


    const listGroup = document.createElement('UL')
    listGroup.classList.add('list-group')

    // mostra cantidades e ingredientes, se itera sobre 1 porque hay un ingrediente agg, , 20 es la cantidad de strIngredient
    for (let i = 1; i <= 20; i++) {
        if (receta[`strIngredient${i}`]) {
            const ingrediente = receta[`strIngredient${i}`]
            const cantidad = receta[`strMeasure${i}`]

            const ingredienteLi = document.createElement('LI');
            ingredienteLi.classList.add('list-group-item');
            ingredienteLi.textContent =`${ingrediente}  -  ${cantidad}`

            listGroup.appendChild(ingredienteLi) // comprobanos el mapeo de ingredientes con cantidades
        }
        
    }

    modalBody.appendChild(listGroup)

    // Limnpiamos el Appendchild para eveitar refresh 
    limpiarHTML(modalFooter)

    // agg btn cerrar y favoritos
    const btnFav = document.createElement('BUTTON');
    btnFav.classList.add('btn','btn-danger','col'); // btn , tbn-danger vienen del boostrap
    btnFav.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';


    // Guardando la informacion en localStorage con un callback
    btnFav.onclick = function () {
        console.log(existeStorage(idMeal))
        // evita que se guarde doble nuestro fav y si lo agg no lo guarda porque ya existe en LocalStorage
    if (existeStorage(idMeal)) {
        eliminarFav(idMeal)
        btnFav.textContent ='Guardar Favorito'
        mostrarToast('Eliminado Correctamente');
        return
    }
        agregarFav({
            id: idMeal,
            title:strMeal,
            img:strMealThumb 
            })
        btnFav.textContent ='Eliminar Favorito'
        mostrarToast('Agregado Correctamente');
    
    }


        // agg btn cerrar y favoritos
       const btnClose = document.createElement('BUTTON');
       btnClose.classList.add('btn','btn-secondary','col'); // btn , tbn-danger vienen del boostrap
       btnClose.textContent = 'Close'
    //    agregamos un call back para cerrar el modal sin tener que llamar el metodo hide()
    btnClose.onclick = function () {
        modal.hide()
    }

    modalFooter.appendChild(btnFav)
    modalFooter.appendChild(btnClose)

    modal.show()// .show es propia de modal 

}

// agregando a fav en localstorages
    function agregarFav(receta) {

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos',JSON.stringify([...favoritos,receta]));
        
    }




// eliminamos favorito de localStorage

    function eliminarFav(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [ ];
        const nuevosFav = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos',JSON.stringify(nuevosFav))
    }

    // comprobamos si ya existe nuestro fav en localStorage

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id);

    }


    // creando Alert toast

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();
    
    
    }



function obtenerFavoritos() {
    // registrar localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        if (favoritos.length) {
            mostrarRecetas(favoritos)
            return
        }}

        const noFav = document.createElement('P');
        noFav.textContent = 'No hay Favoritos Aun '
        noFav.classList.add('fs-4','text-center','font-bold','mt-5')
        favoritoDiv.appendChild(noFav)
    // Limpiando HTML 
    function limpiarHTML(selector) {
        while (selector.firstChild) {
            
            selector.removeChild(selector.firstChild);

        }
    }


}



document.addEventListener('DOMContentLoaded',iniciarApp);








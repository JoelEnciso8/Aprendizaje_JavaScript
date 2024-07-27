import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
    } from "../controller/PaginasController.js"; // se puede importar en una linea de codigo dado que es en la misa ruta de js
// Si agreamos un controlador como paginaInicio podemos tener un codigo visual mas limpio, en este caso se importa paginaInicio de la carpeta controller/PaginasController.js


const router = express.Router(); // es encargado de agg los endpoints que la app pueda soportar, mostrando la informacion creada con express

/*express: Soporta los dif verbos de HTTP  como son , POST,GET,PUT, PATCH,DELETE, en routes
permite la creation de app en MVC, soporat middleware , si esta en el pipe line*/  
// express soporta los verbos de las APIS, PUCH , PATCH , POST

    router.get('/',paginaInicio);

    router.get('/nosotros',paginaNosotros);

    router.get('/viajes',paginaViajes);

    router.get('/viajes/:slug',paginaDetalleViaje);

    router.get('/testimoniales', paginaTestimoniales);



    export default router;
    

     
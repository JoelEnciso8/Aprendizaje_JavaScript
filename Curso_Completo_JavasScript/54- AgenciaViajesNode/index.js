// extrayedno express del package json
import express from 'express';
import path from 'path';
import router from './routes/index.js';

const app = express();

// Definir puerto con variable de entorno
const port = process.env.PORT || 4000;

// Habilitar PUG 
/*permite utilizar archivos estáticos como plantillas, enviar valores para reemplazar variables dentro de las mismas y transformar estos archivos en páginas HTML que se envían al cliente*/
/* es importante configurar el directorio base donde se encuentran tus vistas (archivos Pug). Puedes hacer esto con app.set('views', './view'*/ 
app.set('views', path.join(__dirname, 'views', 'layout'));
app.set('view engine','pug')
console.log('Views directory set to:', app.get('views'));





// MiddleWare, obteniendo el actual year, next nos ayuda a ir al sgt MiddleWare
app.use((request, response,next)=>{
    const year = new Date();

    response.locals.actualYear = year.getFullYear();
    next();
})




// Definiendo la carpeta public
app.use(express.static('public'));


// agregar router
app.use('/',router);


app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto${port}`); // variable port debe estar creada para deployment
})
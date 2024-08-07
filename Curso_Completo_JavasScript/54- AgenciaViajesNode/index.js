import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
// Importamos las carpetas que creamos 
 
// Llamamos a express para que funcione en nuestro proyecto 
const app = express();


// para conectar la base de datos
db.authenticate()
          .then(() =>console.log('Base de datos conectada'))
          .catch(error => console.log(error))

 
// Definir puerto con   variable de entorno, nos asigna node de  manera autimatica, cuando pasemos el proyecto a produccion esta variable de entorno tomara fuerza
const port = process.env.PORT || 4000;
 
// Habilitar PUG
app.set("view engine", "pug");
 
// MiddleWare, obteniendo el actual year, next nos ayuda a ir al sgt MiddleWare
app.use((request, response, next) => {
  const year = new Date();
 
  response.locals.actualYear = year.getFullYear();
  response.locals.nombresitio = "Agencia de Viajes"
  return next();
});
 
// Definiendo la carpeta public usando express 
app.use(express.static("public"));
 
// agregar router
app.use("/", router);
 
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto${port}`); // variable port debe estar creada para deployment
});
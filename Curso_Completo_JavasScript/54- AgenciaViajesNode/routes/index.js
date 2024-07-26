import express from 'express';

const router = express.Router();

/*express: Soporta los dif verbos de HTTP como son , POST,GET,PUT, PATCH,DELETE, en routes
permite la creation de app en MVC, soporat middleware , si esta en el pipe line*/  
// express soporta los verbos de las APIS, PUCH , PATCH , POST

    router.get('/',(req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
        res.render('inicio',{
            pagina: 'Inicio'
        })
            
    });

    router.get('/nosotros',(req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
        res.render('nosotros',{
            pagina: 'Nosotros'
        });
    });
    router.get('/viajes',(req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
        res.render('viajes',{
            pagina: 'Viajes'
        });
    });
    router.get('/testimoniales',(req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
        res.render('testimoniales',{
            pagina: 'Testimoniales'
        });
    });

    export default router;
    

     
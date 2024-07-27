// Exportamos las callsbacks para asi llamarlas en un import module en nuestro  index.js ubicado en la carpeta routes
import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
    res.render('inicio',{
        pagina: 'Inicio'
    })     
}

const paginaNosotros = (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
    // consultar BD 
     const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Proximos Viajes',
        viajes
    });
}


const paginaTestimoniales = (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
}


// muestra un viaje por slug
const paginaDetalleViaje = async (request, response) =>{
    
    const {slug} = request.params.slug;

    try {
        const resultado = await Viaje.findOne( { Where : { slug } });

        response.render('slug',{
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }


}


export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
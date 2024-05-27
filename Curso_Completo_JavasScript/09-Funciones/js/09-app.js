// Metodos de propiedades dentro de un obj

const reproductor = {
    reproducir: (id) =>{
        console.log(`Reproduciendo cancion... ${id}`);
    },
    pausa: ()=>{
        console.log(`Pausando...`);
    },
    borrar: ()=>{
        console.log(`Borrando Cancion..`);
    },
    creandoPlayList:(elem)=>{
        console.log(`creando la PlayList ${elem} `);
    }
}

reproductor.reproducir(20)
reproductor.pausa()
reproductor.borrar()
reproductor.creandoPlayList("Heavy Metal")
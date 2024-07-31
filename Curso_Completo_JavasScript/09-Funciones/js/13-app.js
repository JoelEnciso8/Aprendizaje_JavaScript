// Metodos de propiedades dentro de un obj

const reproductor = {

    reproducir: id =>console.log(`Reproduciendo cancion... ${id}`),
    pausa: ()=>console.log(`Pausando...`),
    borrar: ()=>console.log(`Borrando Cancion..`),
    creandoPlayList:(elem)=>console.log(`creando la PlayList ${elem} `),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`adding song ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }

}
                 

        reproductor.nuevaCancion ="Back in Black"
        reproductor.obtenerCancion;




reproductor.reproducir(20)
reproductor.pausa()
reproductor.borrar()
reproductor.creandoPlayList("Heavy Metal")
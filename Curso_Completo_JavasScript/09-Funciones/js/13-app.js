// Metodos de propiedades dentro de un obj

const reproductor = {

    reproducir: id =>console.log(`Reproduciendo cancion... ${id}`), //Arr fn to create la reproduccion 
    pausa: ()=>console.log(`Pausando...`),//Arr fn to create la pausa
    borrar: ()=>console.log(`Borrando Cancion..`),//Arr fn to create borrar
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
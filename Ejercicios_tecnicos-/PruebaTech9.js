/**27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos:
  id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
            - Apartir de un arreglo con la información de 3 películas genera 3 
              instancias de la clase de forma automatizada e imprime la ficha técnica 
              de cada película. CODigos de peliculas
              
              Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/ 
              
         // 
        // tt15398776
        // tt15239678
        // tt0432283
        // tt0082971+
        // tt0088763
        // tt1865718

        // El nombre de las clases van siempre en MAYUSCULAS , almenos la primera letra, no se coloca (), solo llaves{}

    class Pelicula {
      // tomamos los parametros atraves de constructor
      constructor(id,titulo,director, estreno,pais, generos,score){
        this.id = id;
        this.titulo = titulo;
        this.director =director;
        this.estreno =estreno;
        this.pais=pais;
        this.generos=generos;
        this.score =score;
        

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarScore(score)
      }

      // lista de generos validos. 
      static listaGeneros(){
        return ["Action", "Adult", "Adventure",
         "Animation", "Biography", "Comedy", "Crime", "Documentary" 
          ,"Drama", "Family, Fantasy", "Film Noi", "Game-Show", "History", 
          "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", 
          "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
      }

      // creamos una funcion estatica para validar los generos aceptados

      static generosAceptados(){
         console.log(`log generos aceptados son ${Pelicula.listaGeneros().join(", ")}`);
      }


      // Validaciones 
      validarCadena(propiedad, valor){
        if(!valor) return console.log(`${propiedad} ${valor} Esta vacio`);
        if(typeof valor !== "string") return console.log(`${propiedad} ${valor} No Es una cadena de texto`);
     
        return true;
      }

      validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.log(`${propiedad} ${valor} excede numero permitido de caracteres, ${longitud}`);
     
        return true;
      }
      validarNumero(propiedad, valor){
        if(!valor) return console.log(`${propiedad} ${valor} Esta vacio`);
        if(typeof valor !== "number") return console.log(`${propiedad} ${valor} No Es un numero`);

        return true;
      }

      validarArreglo(propiedad,valor){
        if(!valor) return console.log(`${propiedad} ${valor} Esta vacio`);
        if(!(valor instanceof Array)) return console.log(`${propiedad} ${valor} No Es un arreglo`);

        if(valor.length === 0) return console.log(`${propiedad} ${valor} NO tiene datos`);

        for (const cadena of valor) {
          if(typeof cadena !== "string") return console.log(`${propiedad} ${valor} No es una cadena de texto valida`);
        }
        
        return true
      }
     

      // Funciones  con su respectiva validacion
      validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
          // RegExp ^- no debe haber nada al comienzo $ no debe haber nada al final, ([]) validamos los valores que deseamos, 
          // {} determinamos la cantidad de caracteres queremos que tenga nuestra regExp
          if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
            return console.log((`El IMDB Id ${id} no es valido,debe tener 9 caracteres, 2 letras y 7 numeros`));
          }}


          validarTitulo(titulo){
            if(this.validarCadena("titulo",titulo))
              this.validarLongitudCadena("titulo",titulo,100)
          }


          validarDirector(director){
            if(this.validarCadena("Director",director))
              this.validarLongitudCadena("Director",director,50)
          }

          
          validarEstreno(estreno){
            if(this.validarNumero("estreno", estreno))
              // RegExp ^- no debe haber nada al comienzo $ no debe haber nada al final, ([]) validamos los valores que deseamos, 
              // {} determinamos la cantidad de caracteres queremos que tenga nuestra regExp
              if(!(/^([0-9]){4}$/.test(estreno)))
                return console.log((`Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos.`));
              }
              
              validarPais(pais){
                this.validarArreglo("pais",pais)
              }

              validarGeneros(generos){
                if( this.validarArreglo("generos",generos)){
                  for (let genero of generos) {
                    // console.log(Pelicula.listaGeneros.includes(genero));
                    if(!Pelicula.listaGeneros().includes(genero)){
                       console.log(`Generos incorrectos,${generos.join(",")}`);
                       Pelicula.generosAceptados() 
                    }
                  }
                }
              }
              validarScore(score){
                if(this.validarNumero("Score", score))      
                  return (score < 0 || score > 10)? console.log(`El Score tiene que estar entre 1 y 10`):this.score= score.toFixed(1);
                
  }

              fichaTecnica(){
                console.log(`Ficha Tecnica:\n Titulo:${this.titulo}\n Director: ${this.director}\n Año:${this.estreno}\n Pais: ${this.pais.join(" -")} \n Generos: ${this.generos.join(",")}\n Calificacion: ${this.score}\n IMDB ID:${this.id}`);
              }






}

const descripcion =[{
  id: "tt5398776",
  score :8.0,
  titulo: " Transformer 1",
  director: "Michael Bay ",
  estreno:2009,
  pais: ["USA","Mexico"],
  generos:["Action"],
},
{
  id: "tt1523967",
  score :7.0,
  titulo: "Avatar ",
  director: " James Cameron",
  estreno:2010,
  pais: ["united Kindom","Pandora"],
  generos:["Adventure"],
},
{
  id: "tt1865718",
  score :9.8,
  titulo: " Batman the Dark Knigth",
  director: "Christopher Nolan ",
  estreno:2011,
  pais: ["USA","Egipt"],
  generos:["Adult","Adventure",],
}]

// Instancia creada para validar la clase.
  // const movie = new Pelicula ( "tt0082971","Indiana Jones","Steven Spielberg",2020,["Colombia"],[ "Comedy"], 8.99)
  const movie = descripcion.forEach(el => new Pelicula(el.id, el.titulo, el.director, el.estreno, el.pais, el.generos, el.score).fichaTecnica());

// Instancia creada para validar la clase.

  // const movies = descripcion.map(el => new Pelicula(el.id, el.titulo, el.director, el.estreno, el.pais, el.generos, el.score).fichaTecnica());

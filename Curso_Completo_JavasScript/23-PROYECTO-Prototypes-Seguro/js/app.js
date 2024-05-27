// constructores 

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}
    // realiza la cotizacion 

    Seguro.prototype.cotizarSeguro = function () {
        
        let cantidad;
        const InsurancePrice = 20000;

        switch (this.marca) {
            case '1':
                cantidad = InsurancePrice * 1.15;
                 break;
            case '2':
                cantidad = InsurancePrice * 1.05;
                break;
            case '3':
                cantidad = InsurancePrice * 1.35;
                break;
            default:
                break;
        }
        // Leer el año 
        //
        const diferencia = new Date().getFullYear() - this.year;
        // cada año que la dif es mauor al cost se red un 3%
        cantidad -= ((diferencia *3)* cantidad)/100;

        if (this.tipo === 'basico') {
            cantidad += 1.30;
        } else {
            cantidad += 1.50;
        }
        return cantidad;
       
    }

    // Interfaz de usuario 
    function UI() {}


    // PROTOTYPE, Creamos un prototype que nos de la opcion de ver el año actual y de ver el valor del seguro en un rango de 20 años 

    UI.prototype.llenarOpciones = () => {
        const max = new Date().getFullYear(),
        min = max -20;

        const selectYear = document.querySelector('#year');
        for (let i = max ; i > min; i--) {// equivale a 20 años es decir 2005-2024
            let option = document.createElement('option');
            option.value;
            option.textContent = i;
            selectYear.appendChild(option)
            
        }
    }

        // PROTOTYPE, muestra alert en pantalla

            UI.prototype.mostrarMensaje = function (mensaje, tipo) {
                const div = document.createElement('div');
                if (tipo === 'error') {
                    div.classList.add('error');
                }else{
                    div.classList.add('correcto');
                }

                div.classList.add('mensaje','mt-10');
                div.textContent = mensaje;

                    // adding HTML 
            const formulario =  document.querySelector('#cotizar-seguro');
            formulario.insertBefore(div, document.querySelector('#resultado'));
                
            setTimeout(() => {
                div.remove();
            }, 3000);
            }
        
            UI.prototype.mostrarResultado = (seguro, total) => {
                const {marca, year, tipo} = seguro;

                let textoMarca;
                switch (marca) {
                    case '1':
                        textoMarca = 'Americano'
                        break;
                    case '2':
                        textoMarca = 'Asiatico'
                     break;
                     case '3':
                        textoMarca = 'Europeo'
                        break;
                
                      default:
                        break;
                }
                // creando resultado 
                const div = document.createElement('div');
                div.classList.add('mt-10');

                div.innerHTML = `
                    <p class = "header"> Tu Resumen</p>
                    <p class = "font-bold"> Marca: ${textoMarca} </p>
                    <p class = "font-bold"> Year: $ ${year} </p>
                    <p class = "font-bold"> Tipo: ${tipo} </p>
                    <p class = "font-bold"> Total: ${total} </p>
                `;
                const resultadoDiv = document.querySelector('#resultado');
                

                  // Mostrar spinner
                  const spinner = document.querySelector('#cargando');
                  spinner.style.display = 'block';

                  setTimeout(() => {
                    spinner.style.display = 'none';
                    resultadoDiv.appendChild(div)
                  }, 3000);
            }

              


        // Instanciar

        const ui = new UI();

        document.addEventListener('DOMContentLoaded',() => {
            ui.llenarOpciones();
        })

        eventListeners()
        function eventListeners() {
            const formulario =  document.querySelector('#cotizar-seguro');
            formulario.addEventListener('submit',cotizarSeguro)
        }

        function cotizarSeguro(e) {
            e.preventDefault();

            // leer la marca seleccinado, el año y el tipo de cobertura 
            const marca = document.querySelector('#marca').value;
            const year = document.querySelector('#year').value;

            // leer el tipo de valores de la etiqueta input 
            const tipo = document.querySelector('input[name="tipo"]:checked').value;
                if (marca === ''|| year ==='' || tipo === '') {
                    ui.mostrarMensaje('todos los campos son obligatorios', 'error');
                    return;
                }
                ui.mostrarMensaje('Cotizando ...', 'exito');
            
                // ocultando cotizaciones previas

                const resultados = document.querySelector('#resultado div');
                    if (resultados != null) {
                        resultados.remove()
                    } 

                // instanciar el seguro, utilizando un prototype que cotizara

                const seguro = new Seguro (marca, year, tipo);
                const total =seguro.cotizarSeguro()
                
                // Usando el prototype que se usara 
                ui.mostrarResultado(seguro, total);
                   


        }
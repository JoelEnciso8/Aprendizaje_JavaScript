import {  Cliente } from "./cliente.js";

// class se hereda a cliente el cual muetra la informacion en html 

export class Empresa extends Cliente{
    constructor(nombreCliente, dinero, division){
        super(nombreCliente, dinero) // super nos ayuda a heredar el constructor para generar nuevos 
        this.division = division;
    }
    mostrarinformacion(){
        return ` Nombre Y apellido: ${this.nombreCliente}, Disponible para gastar: ${this.dinero} categoria: ${this.division}`
    }
}
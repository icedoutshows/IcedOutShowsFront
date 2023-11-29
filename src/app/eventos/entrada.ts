import { Evento } from "./evento";

export class Entrada {

    entradaId?:number;
    lugar:string;
    recinto:string;
    fecha:string;
    artista:string;
    precio:number;
    evento!:Evento;
    
    constructor(lugar:string,recinto:string,fecha:string,artista:string,precio:number ){
        this.lugar=lugar
        this.recinto=recinto
        this.fecha=fecha
        this.artista=artista
        this.precio=precio
       
    }
        
}

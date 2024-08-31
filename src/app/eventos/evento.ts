import { Entrada } from "./entrada";

export class Evento {

     evento_id!:number;
     descripcion:string;
     imagen:string;
     titulo:string
     recomendado:boolean;
     entradas!:Entrada[];
     lugar:string;
    fecha:string;
    artista:string;
    precio:number;

     constructor(descripcion:string,imagen:string,titulo:string,recomendado:boolean,lugar:string,fecha:string,artista:string,precio:number){
        
        this.descripcion=descripcion
        this.imagen=imagen
        this.titulo=titulo
        this.recomendado=recomendado
        this.lugar=lugar
        this.fecha=fecha
        this.artista=artista
        this.precio=precio
     }
    
}

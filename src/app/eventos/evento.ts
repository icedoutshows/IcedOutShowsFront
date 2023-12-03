import { Entrada } from "./entrada";

export class Evento {

     evento_id?:number;
     descripcion:string;
     imagen:string;
     titulo:string
     recomendado:boolean;
     entradas!:Entrada[];

     constructor(descripcion:string,imagen:string,titulo:string,recomendado:boolean){
        
        this.descripcion=descripcion
        this.imagen=imagen
        this.titulo=titulo
        this.recomendado=recomendado
     }
    
}

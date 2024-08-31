import { Evento } from "./evento";

export class Entrada {

    entradaId!:number;
    
    recinto:string;
    
    evento!:Evento;
    codigoId!:string;
    
    constructor(recinto:string ){
       
        this.recinto=recinto
        
       
    }
        
}

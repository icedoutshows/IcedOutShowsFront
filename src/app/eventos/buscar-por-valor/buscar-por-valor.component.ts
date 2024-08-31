import { Component } from '@angular/core';
import { EventoServiceService } from '../evento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-buscar-por-valor',
  templateUrl: './buscar-por-valor.component.html',
  styleUrls: ['./buscar-por-valor.component.css']
})
export class BuscarPorValorComponent {

  entradas!:Entrada[];
  input!:string;
  valorSelect!:string;
  error:boolean=false;
  mensaje:string=""

  constructor(private eventoService:EventoServiceService,
    private router:Router,private _activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(){

    let inputObtenido = this._activatedRoute.snapshot.paramMap.get('input');
    if (inputObtenido!== null) {
      this.input = inputObtenido
    }
    let valorObtenido = this._activatedRoute.snapshot.paramMap.get('valor');
    if (valorObtenido!== null) {
      this.valorSelect = valorObtenido
    }
     

    if(this.valorSelect=='artista'){
    this.eventoService.buscarPorArtista(this.input).subscribe(
      (data)=>{
     
      this.entradas=data
      console.log(data)
    
      if(data.length==0){
        this.mensaje="No se ha encontrado ningún resultado de búsqueda. Asegúrate de que has introducido los datos correctamente."
      }
    },
      (error)=>{
      this.error=true
  }
    );
}

if(this.valorSelect=='lugar'){
  this.eventoService.buscarPorLugar(this.input).subscribe(
    (data)=>{
   
    this.entradas=data
    console.log(data)
  
    if(data.length==0){
      this.mensaje="No se ha encontrado ningún resultado de búsqueda. Asegúrate de que has introducido los datos correctamente."
    }
  },
    (error)=>{
    this.error=true
}
  );
}

if(this.valorSelect=='recinto'){
  this.eventoService.buscarPorRecinto(this.input).subscribe(
    (data)=>{
   
    this.entradas=data
    console.log(data)
  
    if(data.length==0){
      this.mensaje="No se ha encontrado ningún resultado de búsqueda. Asegúrate de que has introducido los datos correctamente."
    }
  },
    (error)=>{
    this.error=true
}
  );
}
  }



 
}

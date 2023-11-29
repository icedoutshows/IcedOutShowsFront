import { Component } from '@angular/core';
import { Entrada } from '../../entrada';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoServiceService } from '../../evento-service.service';

@Component({
  selector: 'app-buscar-por-recinto',
  templateUrl: './buscar-por-recinto.component.html',
  styleUrls: ['./buscar-por-recinto.component.css']
})
export class BuscarPorRecintoComponent {
  entradas!:Entrada[];
  recinto!:string;
  error:boolean=false;
  mensaje:string=""

  constructor(private eventoService:EventoServiceService,
    private router:Router,private _activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(){

    let recintoObtenido = this._activatedRoute.snapshot.paramMap.get('recinto');
    if ( recintoObtenido!== null) {
      this.recinto =  recintoObtenido
    }
     


    this.eventoService.buscarPorRecinto(this.recinto).subscribe(
      (data)=>{
      this.entradas=data
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



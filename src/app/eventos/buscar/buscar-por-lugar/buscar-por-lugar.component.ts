import { Component } from '@angular/core';
import { Entrada } from '../../entrada';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoServiceService } from '../../evento-service.service';

@Component({
  selector: 'app-buscar-por-lugar',
  templateUrl: './buscar-por-lugar.component.html',
  styleUrls: ['./buscar-por-lugar.component.css']
})
export class BuscarPorLugarComponent {
  entradas!:Entrada[];
  lugar!:string;
  error:boolean=false;
  mensaje:string=""

  constructor(private eventoService:EventoServiceService,
    private router:Router,private _activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(){

    let lugarObtenido = this._activatedRoute.snapshot.paramMap.get('lugar');
    if (lugarObtenido!== null) {
      this.lugar = lugarObtenido
    }
     


    this.eventoService.buscarPorLugar(this.lugar).subscribe(
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



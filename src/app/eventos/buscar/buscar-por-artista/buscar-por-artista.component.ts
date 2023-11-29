import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoServiceService } from '../../evento-service.service';
import { Evento } from '../../evento';
import { Entrada } from '../../entrada';

@Component({
  selector: 'app-buscar-por-artista',
  templateUrl: './buscar-por-artista.component.html',
  styleUrls: ['./buscar-por-artista.component.css']
})
export class BuscarPorArtistaComponent {

  entradas!:Entrada[];
  artista!:string;
  error:boolean=false;
  mensaje:string=""

  constructor(private eventoService:EventoServiceService,
    private router:Router,private _activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(){

    let artistaObtenido = this._activatedRoute.snapshot.paramMap.get('artista');
    if (artistaObtenido!== null) {
      this.artista = artistaObtenido
    }
     


    this.eventoService.buscarPorArtista(this.artista).subscribe(
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

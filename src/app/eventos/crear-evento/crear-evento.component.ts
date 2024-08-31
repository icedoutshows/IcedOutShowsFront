import { Component } from '@angular/core';
import { EventoServiceService } from '../evento-service.service';
import { Evento } from '../evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent {

  descripcion:string='';
  imagen:string='';
  titulo:string='';
  recomendado:boolean=false;
  lugar:string='';
    fecha:string='';
    artista:string='';
    precio:number=0;

  constructor(private eventoService:EventoServiceService,private router:Router){

  }

  crear():void{
    const evento = new Evento(this.descripcion, this.imagen,this.titulo,this.recomendado,this.lugar,this.fecha,this.artista,this.precio);
    if(evento){
  
    this.eventoService.create(evento).subscribe(
      response => this.router.navigate(['/home'])
    
    )
    }else{
    
    }
  }
}

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

  constructor(private eventoService:EventoServiceService,private router:Router){

  }

  crear():void{
    const evento = new Evento(this.descripcion, this.imagen,this.titulo,this.recomendado);
    if(evento){
  
    this.eventoService.create(evento).subscribe(
      response => this.router.navigate(['/home'])
    
    )
    }else{
    
    }
  }
}

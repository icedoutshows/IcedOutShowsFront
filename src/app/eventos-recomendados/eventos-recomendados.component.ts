import { Component, ChangeDetectorRef  } from '@angular/core';
import { Evento } from '../eventos/evento';
import { EventoServiceService } from '../eventos/evento-service.service';
import { TokenService } from '../services/token.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventos-recomendados',
  templateUrl: './eventos-recomendados.component.html',
  styleUrls: ['./eventos-recomendados.component.css']
})
export class EventosRecomendadosComponent {

  eventos: Evento[] = [];
  eventosLista:Evento[]=[];
  eventosRecomendados:Evento[]=[];
  roles: string[]=[];
  isAdmin=false;
  text:string=''

  constructor(private eventoService:EventoServiceService, private tokenService:TokenService,
    private router:Router){ }

  
  ngOnInit(){ 

    this.roles=this.tokenService.getAuthorities();
  
    this.roles.forEach(rol =>{
      if(rol==='ROLE_ADMIN'){
    this.isAdmin=true;
      }
    })


    this.eventoService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
      this.eventosLista=eventos.slice(0,8);
      this.eventosRecomendados = this.eventos.filter(evento => evento.recomendado);
    });

   


  }

 

  eliminarEvento(evento:Evento):void{
    swal.fire({
      title: 'Estás seguro?',
      text: "No podrás volver a verlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventoService.delete(evento.evento_id!).subscribe(
          response =>{
            this.eventos=this.eventos.filter(ev => ev !== evento)
            this.router.navigateByUrl('home');
            swal.fire(
              'Borrado!',
              'El evento se ha borrado.',
              'success'
            )
          }
          )
       
      }
    })
    
  }
  
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoServiceService } from '../eventos/evento-service.service';
import { Evento } from '../eventos/evento';
import { Entrada } from '../eventos/entrada';
import swal from 'sweetalert2';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent {

  idEvento!: number;
  evento:Evento=new Evento("","","",false,"","","",0);
  entradas:Array<Entrada>=[];
  entradaEvento=new Entrada("");
  eventos: Evento[] = [];
  roles: string[]=[];
  isAdmin=false;
 

  constructor(private _activatedRoute: ActivatedRoute,
    private _eventoService: EventoServiceService,
    private _router: Router,private tokenService:TokenService){

    }
    ngOnInit():void{

      this.roles=this.tokenService.getAuthorities();
  
    this.roles.forEach(rol =>{
      if(rol==='ROLE_ADMIN'){
    this.isAdmin=true;
      }
    })
    
      this._eventoService.getEventos().subscribe(eventos => {
        this.eventos = eventos;
      });
    

      let idUrl = this._activatedRoute.snapshot.paramMap.get('id');
      if (idUrl !== null) {
        this.idEvento = +idUrl;

        this._eventoService.getEventoPorId(this.idEvento).subscribe(
          evento => this.evento= evento
        );
      }

      this._eventoService.getEntradasPorEvento(this.idEvento).subscribe(
        entradas => this.entradas=entradas
      )


      
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
            this._eventoService.delete(evento.evento_id!).subscribe(
              response =>{
                this.eventos=this.eventos.filter(ev => ev !== evento)
                this._router.navigateByUrl('home');
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


    

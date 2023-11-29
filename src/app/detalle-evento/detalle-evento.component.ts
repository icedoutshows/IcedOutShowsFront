import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoServiceService } from '../eventos/evento-service.service';
import { Evento } from '../eventos/evento';
import { Entrada } from '../eventos/entrada';
import { TokenService } from '../services/token.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent {

  idEvento!: number;
  evento:Evento=new Evento("","","",false);
  entradas:Array<Entrada>=[];
  entradaEvento=new Entrada("","","","",0);

 

  constructor(private _activatedRoute: ActivatedRoute,
    private _eventoService: EventoServiceService,
    private _router: Router,
    private tokenService:TokenService){

    }
    ngOnInit():void{
    
    

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

    
  }


    

import { Component } from '@angular/core';
import { EventoServiceService } from '../eventos/evento-service.service';
import { TokenService } from '../services/token.service';
import { Entrada } from '../eventos/entrada';

@Component({
  selector: 'app-mis-entradas',
  templateUrl: './mis-entradas.component.html',
  styleUrls: ['./mis-entradas.component.css']
})
export class MisEntradasComponent {

  entradas:Entrada[]=[]

  constructor(private eventosService:EventoServiceService, private tokenService: TokenService){

  }

  ngOnInit(){

    this.eventosService.obtenerEntradasUsuario(this.tokenService.getUserName())
    .subscribe(response => {
      this.entradas=response
    }, error => {
    
      console.error('Error al obtener entradas:', error);
    });

    
  }
}

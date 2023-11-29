import { Component } from '@angular/core';
import { Entrada } from '../entrada';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoServiceService } from '../evento-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrls: ['./editar-entrada.component.css']
})
export class EditarEntradaComponent {

  idEntrada!: number;
  entrada:Entrada=new Entrada("","","","",0);


  constructor(private _activatedRoute: ActivatedRoute,
    private eventoService: EventoServiceService,
    private router: Router){

    }
    ngOnInit():void{

      let idUrl = this._activatedRoute.snapshot.paramMap.get('id');
      if (idUrl !== null) {
        this.idEntrada = +idUrl;

        this.eventoService.getEntrada(this.idEntrada).subscribe(
          entrada=> this.entrada= entrada
        );
      }
        
    }

    editar():void{
      console.log('estoy en editar')
      console.log(this.entrada.entradaId)
  this.eventoService.updateEntrada(this.entrada).subscribe(
    entrada =>{
      this.router.navigate(['/home'])
      swal.fire('Evento Actualizado','actualizado','success')
    }
  )
    }

}

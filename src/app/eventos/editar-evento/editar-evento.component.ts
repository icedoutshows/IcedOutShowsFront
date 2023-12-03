import { Component } from '@angular/core';
import { EventoServiceService } from '../evento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../evento';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent {

  idEvento!: number;
  evento:Evento=new Evento("","","",false);

  constructor(private _activatedRoute: ActivatedRoute,
    private eventoService: EventoServiceService,
    private router: Router){

    }
    ngOnInit():void{

      let idUrl = this._activatedRoute.snapshot.paramMap.get('id');
      if (idUrl !== null) {
        this.idEvento = +idUrl;

        this.eventoService.getEventoPorId(this.idEvento).subscribe(
          evento => this.evento= evento
        );
      }
        
    }
  
  editar():void{
    console.log('estoy en editar')
    console.log(this.evento.evento_id)
this.eventoService.update(this.evento).subscribe(
  evento =>{
    this.router.navigate(['/home'])
    swal.fire('Evento Actualizado','actualizado','success')
  }
)
  }
  
}

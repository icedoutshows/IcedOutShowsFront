import { Component } from '@angular/core';
import { Entrada } from '../entrada';
import { EventoServiceService } from '../evento-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-entrada',
  templateUrl: './agregar-entrada.component.html',
  styleUrls: ['./agregar-entrada.component.css']
})
export class AgregarEntradaComponent {

  entrada:Entrada=new Entrada("","","","",0)
  entradas:Entrada[]=[]
  id!:number;

constructor(private eventoService:EventoServiceService,private _activatedRoute: ActivatedRoute,private router:Router){

}

ngOnInit(){
 
}

  agregarEntradas(): void {
    let idUrl=this._activatedRoute.snapshot.paramMap.get('id')
    if ( idUrl!== null) {
      this.id= +idUrl;

      this.entradas.push(this.entrada)
    console.log(this.entrada)
    console.log(this.entradas)
    this.eventoService.agregarEntradasEvento(this.entradas,this.id)
      .subscribe(evento => {
        this.router.navigateByUrl("/home")
   
      }, error => {
     
        console.error('Error al agregar entradas:', error);
      });
  }
}}

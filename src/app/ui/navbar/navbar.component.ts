import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Evento } from 'src/app/eventos/evento';
import { EventoServiceService } from 'src/app/eventos/evento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent{

isLogged=false;
@ViewChild('searchInput')
inputSearch?:ElementRef
valorInput!: string;
eventos!: Evento[];
nuevoId!:number;
private notifier: NotifierService;

constructor(private tokenService:TokenService, private eventoService:EventoServiceService,
   private router:Router, private route:ActivatedRoute, notifierService:NotifierService){
    this.notifier = notifierService;
}
 
 
ngOnInit(){

  if(this.tokenService.getToken()){
   
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }
 
}

onLogout():void{
this.tokenService.logOut();
this.isLogged=false;

}


buscar() {
  let valorSelect=document.getElementById("select")as HTMLSelectElement
  if(valorSelect.value=="artista"){
  if (this.valorInput) {
    this.router.navigate(['/eventos/buscarPorArtista/',this.valorInput]);
     
  }else{
    this.notifier.notify('error', 'Introduce un valor');
  }
}
if(valorSelect.value=="lugar"){
  if (this.valorInput) {
    this.router.navigate(['/eventos/buscarPorLugar/',this.valorInput]);
     
  }else{
    this.notifier.notify('error', 'Introduce un valor');
  }
}

if(valorSelect.value=="recinto"){
  if (this.valorInput) {
    this.router.navigate(['/eventos/buscarPorRecinto/',this.valorInput]);
     
  }else{
    this.notifier.notify('error', 'Introduce un valor');
  }
}
}




}

import { Component } from '@angular/core';
import { LoginRequest } from '../modelos/login-request';
import { EventoServiceService } from '../eventos/evento-service.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  loginRequest?:LoginRequest;
  email!:String;
  private notifier: NotifierService;

  constructor(private eventoService: EventoServiceService,notifierService:NotifierService) {
    this.notifier = notifierService;
   }
  
  
  
  
  suscribirse():void{ 
    this.loginRequest=new LoginRequest(this.email);
    this.eventoService.authenticate(this.loginRequest).subscribe(
    response => {
      console.log('Respuesta del servidor:', response);
      this.notifier.notify('success', 'Suscripción con éxito');

    },
    error => {
      console.error('Error al autenticar:', error);

    }
  );}
}


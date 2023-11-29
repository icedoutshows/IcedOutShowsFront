import { Component } from '@angular/core';
import { NuevoUsuario } from '../modelos/nuevo-usuario';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nuevoUsuario?: NuevoUsuario;
  nombre: string='';
  nombreUsuario: string='';
  email: string='';
  password: string='';
  errMsj: string='';
  isLogged = false;
  private notifier: NotifierService;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router:Router,
    notifierService:NotifierService
    ){
      this.notifier = notifierService; }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
  
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password,['user']);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        console.log('usuario creado')
        this.router.navigate(['/login']);
       
      },
      error => {
        console.log('usuario no creado')
       this.notifier.notify('error', 'Usuario no creado');
      }
    );
  }

}

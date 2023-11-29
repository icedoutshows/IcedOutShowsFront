import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { LoginUsuario } from '../modelos/login-usuario';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogged= false;
  isLoginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario:string='';
  password:string='';
  roles:string[]= [];
  errorMsj:string='';
  private notifier: NotifierService;
  
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    notifierService:NotifierService
  ){
    this.notifier = notifierService;
  }

  ngOnInit(){
   
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
      this.roles=this.tokenService.getAuthorities();
      console.log('se cogio el token')
    }
  }

  onLogin():void{
    console.log('estoy en onLogin')
    
    this.loginUsuario=new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLoginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;     
        this.router.navigate(['/home']);
      
       
        
      },
      (err) => {
        this.isLogged=false;
        this.isLoginFail=true;
        this.notifier.notify('error', 'Credenciales Incorrectas');
        
      }

     );
     
  }
}

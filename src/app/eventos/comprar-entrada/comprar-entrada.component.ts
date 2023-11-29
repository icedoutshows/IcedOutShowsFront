import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { EventoServiceService } from '../evento-service.service';
import { TokenService } from 'src/app/services/token.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Entrada } from '../entrada';
import swal from 'sweetalert2';

@Component({
  selector: 'app-comprar-entrada',
  templateUrl: './comprar-entrada.component.html',
  styleUrls: ['./comprar-entrada.component.css']
})
export class ComprarEntradaComponent {

  idEntrada!:number
  idEvento!:number
  entrada!:Entrada
  payPalConfig ? : IPayPalConfig;
  numEntrada:number=1
  fechaFormateada:string=""
  roles: string[]=[];
  isAdmin=false;

  constructor(private _activatedRoute: ActivatedRoute,
    private _eventoService: EventoServiceService,
    private _router: Router,
    private tokenService:TokenService,
    private spinner: NgxSpinnerService,
    ){

  }

  ngOnInit(){


    this.roles=this.tokenService.getAuthorities();
  
    this.roles.forEach(rol =>{
      if(rol==='ROLE_ADMIN'){
    this.isAdmin=true;
      }
    })
    
    this.initConfig()

    
    

    let idEntrada = this._activatedRoute.snapshot.paramMap.get('idEntrada');
      if (idEntrada !== null) {
        this.idEntrada = +idEntrada;
        
      }

      let idEvento= this._activatedRoute.snapshot.paramMap.get('idEvento');
      if (idEvento !== null) {
        this.idEvento = +idEvento;
      }

      this._eventoService.getEntradaPorId(this.idEvento,this.idEntrada).subscribe(
        (entrada) => {
          this.entrada=entrada
          console.log('Entrada obtenida:', entrada);
        
        },
        (error) => {
          console.error('Error al obtener la entrada:', error);
         
        }
      );

      setTimeout(() => {
        this.formatearFecha() 
      }, 100);
     
      
  }

  incrementar(){
    if(this.numEntrada<20){
      this.numEntrada++;
    }
   
    
  }

  decrementar(){
    if(this.numEntrada>1)
    this.numEntrada--;
  }

  calcularTotal():number{

    let total= this.numEntrada*this.entrada.precio
    return total;
  }


  formatearFecha() {
    const fecha = new Date(this.entrada.fecha);
    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const dia = fecha.getDate();
    const mesNombre = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    this.fechaFormateada = `${dia} de ${mesNombre} de ${año}`;
  }
  
 

  private initConfig(): void {
    
    this.payPalConfig = {
     
        currency: 'EUR',
        clientId: 'ARmkzDoXCUK657aXabjJOqSfHjNJwW42x5AK_CIs3L2GfZU7MQghCnj9OQr16c_cLdIqDc2xa5gCOa2n',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: this.calcularTotal().toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: this.calcularTotal().toString()
                        }
                    }
                },
                
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: this.numEntrada.toString(),
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: this.entrada.precio.toString(),
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
          this.spinner.show()
            console.log('onApprove - transaction was approved, but not authorized', data, actions);

        },
        onClientAuthorization: (data) => {
          this.spinner.hide()
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this._eventoService.asignarEntradaAUsuario(this.tokenService.getUserName(), this.idEntrada)
            .subscribe(response => {
              console.log('Entrada asignada correctamente:', response);
              swal.fire(
                'Entrada Comprada!',
                'Se ha añadido a tus entradas.',
                'success'
              )
              this._router.navigateByUrl("/home")
            }, error => {
              console.error('Error al asignar la entrada:', error);
            });
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);           
        },
        onError: err => {
            console.log('OnError', err);
          
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
           
        }
    };
}

  
eliminarEntrada():void{
  swal.fire({
    title: 'Estás seguro?',
    text: "No podrás volver a verla!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, elimínalo!'
  }).then((result) => {
    if (result.isConfirmed) {
      this._eventoService.eliminarEntrada(this.entrada.entradaId!).subscribe(
        response =>{
        
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

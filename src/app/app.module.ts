import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './ui/navbar/navbar.component';
import { DatosEmpresaComponent } from './datos-empresa/datos-empresa.component';
import { EventosRecomendadosComponent } from './eventos-recomendados/eventos-recomendados.component';
import {HttpClientModule} from "@angular/common/http";
import { EventoServiceService } from './eventos/evento-service.service';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './interceptors/event-interceptor.service';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { NotifierModule,NotifierOptionsToken } from 'angular-notifier';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AgregarEntradaComponent } from './eventos/agregar-entrada/agregar-entrada.component';
import { MisEntradasComponent } from './mis-entradas/mis-entradas.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from "ngx-spinner";
import { ComprarEntradaComponent } from './eventos/comprar-entrada/comprar-entrada.component';
import { BuscarPorArtistaComponent } from './eventos/buscar/buscar-por-artista/buscar-por-artista.component';
import { BuscarPorLugarComponent } from './eventos/buscar/buscar-por-lugar/buscar-por-lugar.component';
import { BuscarPorRecintoComponent } from './eventos/buscar/buscar-por-recinto/buscar-por-recinto.component';
import { EditarEntradaComponent } from './eventos/editar-entrada/editar-entrada.component';
import { AyudaComponent } from './ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosEmpresaComponent,
    EventosRecomendadosComponent,
    DetalleEventoComponent,
    LoginComponent,
    RegistroComponent,
    CrearEventoComponent,
    EditarEventoComponent,
    NewsletterComponent,
    AgregarEntradaComponent,
    MisEntradasComponent,
    ComprarEntradaComponent,
    BuscarPorArtistaComponent,
    BuscarPorLugarComponent,
    BuscarPorRecintoComponent,
    EditarEntradaComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbCarouselModule,
    FormsModule,
    NotifierModule,
    CarouselModule,
    NgxPayPalModule,
    NgxSpinnerModule,
   
    
  ],
  providers: [EventoServiceService , {
    provide: NotifierOptionsToken, 
    useValue: {
      position: {
        horizontal: {
          position: 'left',
          distance: 12
        },
        
        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        }
      }
    }
  } 
, interceptorProvider],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

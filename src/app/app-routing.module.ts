import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosRecomendadosComponent } from './eventos-recomendados/eventos-recomendados.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { LoginComponent } from './auth/login.component';
import { EventGuardService as guard} from './guards/event-guard.service';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { RegistroComponent } from './auth/registro.component';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AgregarEntradaComponent } from './eventos/agregar-entrada/agregar-entrada.component';
import { MisEntradasComponent } from './mis-entradas/mis-entradas.component';
import { ComprarEntradaComponent } from './eventos/comprar-entrada/comprar-entrada.component';
import { BuscarPorArtistaComponent } from './eventos/buscar/buscar-por-artista/buscar-por-artista.component';
import { BuscarPorLugarComponent } from './eventos/buscar/buscar-por-lugar/buscar-por-lugar.component';
import { BuscarPorRecintoComponent } from './eventos/buscar/buscar-por-recinto/buscar-por-recinto.component';
import { EditarEntradaComponent } from './eventos/editar-entrada/editar-entrada.component';
import { AyudaComponent } from './ayuda/ayuda.component';


const routes: Routes = [
  { path: '', component: EventosRecomendadosComponent },
  { path: 'home', component: EventosRecomendadosComponent },
  { path: 'crear', component: CrearEventoComponent },
  { path: 'editar/:id', component: EditarEventoComponent },
  { path: 'editarEntrada/:id', component: EditarEntradaComponent },
  { path: 'agregarEntrada/:id', component: AgregarEntradaComponent },
  { path: 'entradas', component: MisEntradasComponent },
  { path: 'evento/:id', component: DetalleEventoComponent },
  { path: 'eventos/buscarPorArtista/:artista', component: BuscarPorArtistaComponent},
  { path: 'eventos/buscarPorLugar/:lugar', component: BuscarPorLugarComponent},
  { path: 'eventos/buscarPorRecinto/:recinto', component: BuscarPorRecintoComponent},
  { path: 'evento/:idEvento/entrada/:idEntrada', component: ComprarEntradaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'login', component: LoginComponent },
  { path: 'login/registro', component: RegistroComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'help', component: AyudaComponent },
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { EditarEntradaComponent } from './eventos/editar-entrada/editar-entrada.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { BuscarPorValorComponent } from './eventos/buscar-por-valor/buscar-por-valor.component';


const routes: Routes = [
  { path: '', component: EventosRecomendadosComponent },
  { path: 'home', component: EventosRecomendadosComponent },
  { path: 'crear', component: CrearEventoComponent },
  { path: 'editar/:id', component: EditarEventoComponent },
  { path: 'editarEntrada/:id', component: EditarEntradaComponent },
  { path: 'agregarEntrada/:id', component: AgregarEntradaComponent },
  { path: 'entradas', component: MisEntradasComponent , canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'evento/:id', component: DetalleEventoComponent },
  { path: 'eventos/buscar/:valor/:input', component: BuscarPorValorComponent},
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

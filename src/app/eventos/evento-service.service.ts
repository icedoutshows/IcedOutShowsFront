import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Evento} from './evento';
import { Entrada } from './entrada';
import { LoginRequest } from '../modelos/login-request';


@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {
  private url:string="http://localhost:8080/api/eventos";
  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }


  getEventos():Observable<Evento[]>{
    return this.http.get<Evento[]>(this.url)
  }

  getEventoPorId(id:number):Observable<Evento>{
    return this.http.get<Evento>(`${this.url}/${id}`)
  }


  create(evento:Evento):Observable<Evento>{
    return this.http.post<Evento>(this.url,evento,{headers:this.httpHeaders})
  }

  delete(id:number):Observable<Evento>{
    return this.http.delete<Evento>(`${this.url}/${id}`,{headers:this.httpHeaders})
  }

  update(evento:Evento):Observable<Evento>{
    return this.http.put<Evento>(`${this.url}/${evento.evento_id}`,evento,{headers:this.httpHeaders})
  }

  getEntradasPorEvento(id:number):Observable<Entrada[]>{
    return this.http.get<Entrada[]>(`${this.url}/entradas/${id}`)
  }


  agregarEntradasEvento(entradas:Entrada[],id:number):Observable<Evento>{
    return this.http.post<Evento>(`${this.url}/${id}`,entradas)
  }


  getEntradaPorId(idEvento:number,idEntrada:number):Observable<Entrada>{
    return this.http.get<Entrada>(`${this.url}/entrada?idEvento=${idEvento}&idEntrada=${idEntrada}`)
  }


 getEntrada(idEntrada:number):Observable<Entrada>{
  return this.http.get<Entrada>(`${this.url}/entradaCompleta/${idEntrada}`)
 }

  eliminarEntrada(id:number):Observable<Entrada>{
    return this.http.delete<Entrada>(`${this.url}/entrada/${id}`,{headers:this.httpHeaders})
  }

  updateEntrada(entrada:Entrada):Observable<Entrada>{
    return this.http.put<Entrada>(`${this.url}/entrada/${entrada.entradaId}`,entrada,{headers:this.httpHeaders})
  }

  authenticate(loginRequest:LoginRequest):Observable<LoginRequest>{
    return this.http.post<LoginRequest>(`${this.url}/authenticate`,loginRequest)
  }

  buscarPorArtista(artista:string):Observable<Entrada[]>{
    return this.http.get<Entrada[]>(`${this.url}/buscarPorArtista?artista=${artista}`)
  }


  buscarPorLugar(lugar:string):Observable<Entrada[]>{
    return this.http.get<Entrada[]>(`${this.url}/buscarPorLugar?lugar=${lugar}`)
  }

  buscarPorRecinto(recinto:string):Observable<Entrada[]>{
    return this.http.get<Entrada[]>(`${this.url}/buscarPorRecinto?recinto=${recinto}`)
  }

  obtenerEntradasUsuario(nombreUsuario:string):Observable<any>{
    return this.http.get<any>(`${this.url}/entradas?nombreUsuario=${nombreUsuario}`)
  }

  asignarEntradaAUsuario(nombreUsuario:string,idEntrada:number):Observable<any>{
    return this.http.post<any>(`${this.url}/entradasComprar?nombreUsuario=${nombreUsuario}&idEntrada=${idEntrada}`,{headers:this.httpHeaders})
  }

  authenticateEntradas(idEntrada:number,nombreUsuario:string):Observable<any>{
    return this.http.post<any>(`${this.url}/authenticateEntradas?idEntrada=${idEntrada}&nombreUsuario=${nombreUsuario}`,{headers:this.httpHeaders})
  }


}

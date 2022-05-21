import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais } from './animais';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais>{
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {

    } )
  }

  buscaPorID(id: number): Observable<Animais>{
    return this.http.get<Animais>(`${API}/photos/${id}`)
  }


}

import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais } from './animais';

const API = environment.apiURL;
const NOT_MODIFIED = '304';
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
    return this.http.get<Animais>(`${API}/photos/${id}`);
  }

  excluirAnimal(id: number): Observable<Animais>{
    return this.http.delete<Animais>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean>{
   return this.http
   .post(`${API}/photos/${id}/like`,{}, {observe: 'response'})
   .pipe(
   mapTo(true),
   catchError((error) => {
     return error.status === NOT_MODIFIED ? of (false) : throwError(error);
   })
   );
  }

}

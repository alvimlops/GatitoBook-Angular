import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) {

  }

  cadastroNovoUsuario(NovoUsuario: NovoUsuario){
    return this.http.post('http://localhot:3000/user/signup', NovoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string){
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}

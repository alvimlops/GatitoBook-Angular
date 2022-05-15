import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exists } from 'fs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) {

  }

  cadastroNovoUsuario(NovoUsuario: NovoUsuario){
    return this.http.post(`${API}/user/signup`, NovoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeUsuario}`);
  }

}

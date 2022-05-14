import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private UsuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private TokenService: TokenService) {
    if(this.TokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

private decodificaJWT(){
  const token = this.TokenService.retornaToken();
  const Usuario = jwtDecode(token) as Usuario;
  this.UsuarioSubject.next(Usuario);
}

retornaUsuario(){
  return this.UsuarioSubject.asObservable();
}

salvaToken(token: string){
this.TokenService.salvaToken(token);
this.decodificaJWT();
}

logout(){
  this.TokenService.excluirTken();
  this.UsuarioSubject.next({});
}

estaLogao(){
  return this.TokenService.possuiToken();
}

}

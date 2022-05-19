import { TokenService } from './autenticacao/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoautenticacaoInterceptor implements HttpInterceptor {

  constructor(private tokenSerivice: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if( this.tokenSerivice.possuiToken()){
      const token = this.tokenSerivice.retornaToken();
      const headers = new HttpHeaders().append('x-acess-token', token);
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}

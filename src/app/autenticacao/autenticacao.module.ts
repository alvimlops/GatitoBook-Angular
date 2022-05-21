import { AutenticacaoautenticacaoInterceptor } from './../autenticacaoautenticacao.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoautenticacaoInterceptor,
    multi: true,
  }]

})
export class AutenticacaoModule { }

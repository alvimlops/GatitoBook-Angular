import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { MensagemModule } from './componentes/mensagem/mensagem.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MensagemModule, CabecalhoModule, RodapeModule, AutenticacaoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

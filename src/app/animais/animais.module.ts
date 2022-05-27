import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentarioComponent } from './datalhe-animal/comentario/comentario.component';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';


@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    DetalheAnimalComponent,
    ComentarioComponent,
    NovoAnimalComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    SharedModule,
  ]
})
export class AnimaisModule { }

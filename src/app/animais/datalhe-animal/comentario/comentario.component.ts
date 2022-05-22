import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Comentario, Comentarios } from './../../detalhe-animal/comentario/comentario';
import { Component, Input, OnInit } from '@angular/core';
import { ComentarioService } from '../../detalhe-animal/comentario/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  @Input() id!: number;
  Comentarios$!: Observable<Comentarios>;
  ComentarioForm!: FormGroup;

  constructor(private comentarioService: ComentarioService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.Comentarios$ = this.comentarioService.buscarComentario(this.id)
  this.ComentarioForm = this.formBuilder.group({
    comentario: ['', Validators.maxLength(300)],
  })
  }

  gravae(): void{
    const Comentario = this.ComentarioForm.get('comentario')?.value ?? '';
    this.Comentarios$ = this.comentarioService.incluirComentario(
      this.id,
      Comentario
    ).pipe(
      switchMap(()=> this.comentarioService.buscarComentario(this.id)),
      tap(()=>{
        this.ComentarioForm.reset();
      alert('salvo com sucesso');
      })
    );
  }

}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Comentarios } from './comentario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private Http: HttpClient) { }

  buscarComentario(id: number): Observable<Comentarios>{
    return this.Http.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  incluirComentario(id:number, commentText: string): Observable<Comentarios>{
    return this.Http.post<Comentarios>(`${API}/photos/${id}/comments`,{
      commentText,
    })
  }
}

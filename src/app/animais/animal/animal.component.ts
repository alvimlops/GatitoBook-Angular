import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

//ele vai busca as imagens da API do back, aqui eu faço a chamada
const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private urlOriginal = '';

  @Input() descricao = '';

  //meu set
  @Input() set url(url:string){
    if(url.startsWith('data')){
      this.urlOriginal = url;
    }else{
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  //meu get
  get url():string{
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

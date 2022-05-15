import { Component, OnInit } from '@angular/core';

//ele vai busca as imagens da API do back, aqui eu faço a chamada
const API = 'http/localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

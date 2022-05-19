import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalID!: number;
  animal$: Observable<Animal> | undefined;

  constructor(private animalService: AnimaisService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.animalID = this.activatedRoute.snapshot.params['animalId'];
    this.animalID = this.animalService.buscaPorID(this.animalID);
  }

}

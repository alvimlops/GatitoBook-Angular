import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalID!: number;
  animal$: Observable<Animal> | undefined;

  constructor(private animalService: AnimaisService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.animalID = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animalService.buscaPorID(this.animalID);
  }

  curtir(){
    this.animalService.curtir(this.animalID).subscribe((curtida)=>{
      if(curtida){
        this.animal$ = this.animalService.buscaPorID(this.animalID);
      }
    })

  }

  excluir(){
this.animalService.excluirAnimal(this.animalID).subscribe(()=>{
  this.router.navigate(['/animais/']);
}, (error)=> console.log(error))

  }
}

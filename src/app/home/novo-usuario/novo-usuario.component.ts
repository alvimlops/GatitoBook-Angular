import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  NovoUsuarioForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private NovoUsuarioService:NovoUsuarioService) { }

  ngOnInit(): void {
    this.NovoUsuarioForm = this.formBuilder.group({
      email:[''],
      fullName:[''],
      userName:[''],
      password:[''],
    })
  }

  cadastrar(){
    const NovoUsuario = this.NovoUsuarioForm.getRawValue() as NovoUsuarioComponent
    console.log(NovoUsuario)
  }

}

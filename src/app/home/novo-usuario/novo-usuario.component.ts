import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  NovoUsuarioForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private NovoUsuarioService:NovoUsuarioService, private UsuarioExisteService: UsuarioExisteService, private router: Router) { }

  ngOnInit(): void {
    this.NovoUsuarioForm = this.formBuilder.group({
      //validator valida se e um email o angular ja tem essas validacoes
      //required significa que o campo e obrigatorio
      email:['', [Validators.required, Validators.email]],
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName:['',[minusculoValidator], [this.UsuarioExisteService.usuarioExiste()]],
      password:[''],
    },{
      Validators:[usuarioSenhaIguaisValidator],
    }
    );
  }

  cadastrar(){
    if(this.NovoUsuarioForm.valid){
      const NovoUsuario = this.NovoUsuarioForm.getRawValue() as NovoUsuario;
      this.NovoUsuarioService.cadastroNovoUsuario(NovoUsuario).subscribe(()=>{
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error)
      }
      );
    }
  }

}

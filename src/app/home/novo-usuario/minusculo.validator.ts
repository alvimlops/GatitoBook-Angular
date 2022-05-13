import { AbstractControl } from "@angular/forms";

//Metodo para validar se as letras são minusculas
export function minusculoValidator(control: AbstractControl){
  const valor = control.value as string;
  if(valor !== valor.toLowerCase()){
    return { minusculo: true};
  } else{
    return null;
  }
}

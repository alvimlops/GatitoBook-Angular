import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rota das paginas
const routes: Routes = [
  {
    path:'',
    pathMatch:'full', //caso tenha espaços em branco na rota, essa função tira
    redirectTo: 'home', //caso seja em branco, voltar para o Home
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=> m.HomeModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

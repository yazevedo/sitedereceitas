import { NgModule } from '@angular/core';  // Adicionar a importação de NgModule
import { RouterModule, Routes } from '@angular/router';  // Importar RouterModule e Routes
import { AuthGuard } from './auth.guard';  // O Auth Guard que você acabou de criar
import { ReceitasComponent } from './receitas/receitas.component';  // Importa o ReceitasComponent


export const routes: Routes = [
  { path: 'cadastro', loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent) },
  { path: 'receitas', canActivate: [AuthGuard], loadComponent: () => import('./receitas/receitas.component').then(m => m.ReceitasComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'mais-sobre', loadComponent: () => import('./maisobre/maisobre.component').then(m => m.MaisobreComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura as rotas para o projeto
  exports: [RouterModule]  // Exporta RouterModule para uso nos componentes
})
export class AppRoutingModule { }

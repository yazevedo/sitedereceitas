import { NgModule } from '@angular/core';  // Adicionar a importação de NgModule
import { RouterModule, Routes } from '@angular/router';  // Importar RouterModule e Routes
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaisobreComponent } from './maisobre/maisobre.component';

export const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: '', component: HomeComponent },  // Caminho vazio geralmente leva à Home
  { path: '', component: HomeComponent },  // Caminho vazio geralmente leva à Home
  { path: 'login', component: LoginComponent },
  { path: 'mais-sobre', component: MaisobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura as rotas para o projeto
  exports: [RouterModule]  // Exporta RouterModule para uso nos componentes
})
export class AppRoutingModule { }

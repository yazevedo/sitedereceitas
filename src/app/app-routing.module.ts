import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReceitasComponent } from './receitas/receitas.component'; // Crie esse componente ou ajuste conforme o seu

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

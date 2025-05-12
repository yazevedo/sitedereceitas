import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  nome_usuario = '';
  senha = '';
  mensagem = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.nome_usuario, this.senha).subscribe({
      next: (res) => {
        this.router.navigate(['/receitas']);
      },
      error: () => {
        this.mensagem = 'Usuário ou senha inválidos.';
      }
    });
  }
}

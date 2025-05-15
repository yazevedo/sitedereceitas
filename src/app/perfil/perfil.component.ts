import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ importe o módulo
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // ✅ adicione aqui
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  novaSenha: string = '';
  confirmarSenha: string = '';
  confirmacaoUsuario: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  voltar(): void {
  this.router.navigate(['/receitas']);
  }

   sair() {
  localStorage.removeItem('token');
  window.location.href = '/home'; // ou '/login', dependendo da sua rota
   }    
  

  alterarSenha() {
    const nome_usuario = localStorage.getItem('nome_usuario');
    if (!nome_usuario) return alert('Usuário não autenticado.');

    if (this.novaSenha !== this.confirmarSenha) {
      return alert('As senhas não coincidem.');
    }

    this.http.put('http://localhost:3000/usuarios/senha', {
      nome_usuario,
      novaSenha: this.novaSenha
    }).subscribe({
      next: () => alert('Senha alterada com sucesso!'),
      error: () => alert('Erro ao alterar senha.')
    });
  }

  excluirConta() {
    const nome_usuario = localStorage.getItem('nome_usuario');
    if (!nome_usuario) return alert('Usuário não autenticado.');

    if (this.confirmacaoUsuario !== nome_usuario) {
      return alert('Confirmação incorreta. Nome de usuário não confere.');
    }

    this.http.request('delete', 'http://localhost:3000/usuarios/conta', {
      body: { nome_usuario }
    }).subscribe({
      next: () => {
        alert('Conta excluída.');
        localStorage.clear();
        this.router.navigate(['/']);
      },
      error: () => alert('Erro ao excluir conta.')
    });
  }
}

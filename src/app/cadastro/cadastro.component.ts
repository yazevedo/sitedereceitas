import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome_completo: '',
    nome_usuario: '',
    senha: '',
    email: ''
  };

  mensagem = '';

  constructor(private http: HttpClient) {}

  cadastrarUsuario() {
    this.http.post('http://localhost:3000/usuarios/cadastro', this.usuario)
      .subscribe({
        next: () => this.mensagem = 'Usuário cadastrado com sucesso!',
        error: err => this.mensagem = 'Erro ao cadastrar: ' + (err.error?.message || err.message || err.statusText)
      });
  }
}

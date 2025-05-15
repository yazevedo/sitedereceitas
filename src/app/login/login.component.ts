import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginComponent {
  formLogin: FormGroup;
  erroLogin: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      nome_usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  fazerLogin() {
    if (this.formLogin.invalid) return;

    this.http.post<any>('http://localhost:3000/usuarios/login', this.formLogin.value)
      .subscribe({
        next: (res) => {
          // Armazene o token (fictício por enquanto)
          localStorage.setItem('token', res.token);
          localStorage.setItem('nome_usuario', this.formLogin.value.nome_usuario);
          this.router.navigate(['/receitas']); // Redireciona após login
        },
        error: (err) => {
          this.erroLogin = err.error.mensagem || 'Erro ao fazer login.';
        }
      });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  erroLogin: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nome_usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.http.post<any>('http://localhost:3000/login', this.loginForm.value)
      .subscribe({
        next: response => {
          // Armazena token (mesmo que seja falso por enquanto)
          localStorage.setItem('token', response.token);
          this.router.navigate(['/receitas']);
        },
        error: err => {
          this.erroLogin = err.error?.mensagem || 'Erro ao fazer login.';
        }
      });
  }
}

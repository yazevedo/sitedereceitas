import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(nome_usuario: string, senha: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { nome_usuario, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token); // salva o token fake
        this.router.navigate(['/receitas']);
      }),
      catchError(err => throwError(() => err))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

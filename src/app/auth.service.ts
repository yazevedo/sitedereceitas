import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logado = new BehaviorSubject<boolean>(this.temToken());

  constructor(private http: HttpClient) {}

  login(usuario: string, senha: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/usuarios/login', {
      nome_usuario: usuario,
      senha: senha
    }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.logado.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.logado.next(false);
  }

  estaLogado(): Observable<boolean> {
    return this.logado.asObservable();
  }

  temToken(): boolean {
    return !!localStorage.getItem('token');
  }
}

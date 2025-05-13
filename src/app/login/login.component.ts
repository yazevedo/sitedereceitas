import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nome_usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

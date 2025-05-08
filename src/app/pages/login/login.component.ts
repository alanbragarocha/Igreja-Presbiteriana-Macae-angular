import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // Getter para fácil acesso aos campos do formulário
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // Se o formulário é inválido, não prosseguir
    if (this.loginForm.invalid) {
      return;
    }

    // Em uma aplicação real, aqui enviaríamos a requisição para o backend
    // Como este é apenas um mock, vamos simular um login bem-sucedido se
    // o usuário for "admin" e a senha for "admin123"
    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === 'admin123') {
      // Login bem-sucedido
      // Simular armazenamento de token
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          username,
          token: 'fake-jwt-token',
        })
      );

      // Redirecionar para a página inicial
      this.router.navigate(['/home']);
    } else {
      // Login falhou
      this.errorMessage = 'Usuário ou senha incorretos';
    }
  }
}

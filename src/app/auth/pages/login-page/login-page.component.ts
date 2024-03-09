import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})



export class LoginPageComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private authService:AuthService,
    private router: Router,
    private fb: FormBuilder,
  ){}
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).
        subscribe((user: any) => {
          if (!user) return;
          alert("inicisio de sesion correcto");

        },
          (error) => {
            alert('Credenciales incorrectas');
          }
        );

    }

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})



export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }
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
          this.authService.setToken(user.token);
          if (user.role === "Administrador") {
            this._snackBar.open("Bienvenido!!", "Cerrar", {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
            setTimeout(() => {
              this.router.navigate(['admin/users']);
            }, 3000);


          } else {
            this.router.navigate([`admin/new-users/${user.id}}`]);
          }
        },
          (error) => {
            alert('Credenciales incorrectas');
          }
        );

    }

  }
}

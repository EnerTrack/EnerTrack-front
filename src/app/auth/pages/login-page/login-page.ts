import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../interfaces/loginRequest.interface';

@Component({
  selector: 'login-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.html',
})
export class LoginPage {

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);

  authservice = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  get currentLogin(): LoginRequest {
    const { email, password } = this.loginForm.value;
    return {
      email: email ?? '',
      password: password ?? ''
    };
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()

      this.hasError.set(true)

    } else {

      this.authservice.login(this.currentLogin).subscribe(
        isAuthenticated => {

          if (isAuthenticated) {
            this.router.navigateByUrl('/panel')
            return
          }

          this.hasError.set(true)
          alert('usuario invalido')
        }
      )
    }
  }


}

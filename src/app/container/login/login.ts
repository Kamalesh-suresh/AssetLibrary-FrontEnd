import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterModule,
    MessageModule,
  ],
})
export class Login {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('Login success:', res);

        // ✅ Store token
        localStorage.setItem('token', res.token);

        // ✅ Navigate after login
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert(err.error?.message || 'Login failed');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}

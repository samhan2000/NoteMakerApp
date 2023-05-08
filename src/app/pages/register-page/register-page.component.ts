import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  showPassword = true;

  loginForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z0-9]*'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    public localStorage: LocalStorageService,
    private router: Router
  ) {}

  // passwordMatchValidator(form: FormGroup) {
  //   const password = form.get('password')?.value;
  //   const confirmPassword = form.get('confirmPassword')?.value;

  //   return password === confirmPassword ? null : { passwordMismatch: true };
  // }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.localStorage.setItem(this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['/']);
  }

  togglePasswordType(): void {
    this.showPassword = !this.showPassword;
  }
}

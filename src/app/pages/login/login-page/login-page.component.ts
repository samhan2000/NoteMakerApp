import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
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
    public localStorageService: LocalStorageService,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  onSubmit(): void {
    console.log(this.loginForm.value);
    console.log(this.loginForm.value);
    let s = this.localStorageService.checkItem(this.loginForm.value);

    if (s) {
      this.router.navigate(['/']);
    } else {
      const element = this.elRef.nativeElement.querySelector('.error');
      this.renderer.setStyle(element, 'opacity', '100');
      console.log('Incorrect Username / Password');
    }
  }

  togglePasswordType(): void {
    this.showPassword = !this.showPassword;
  }
}

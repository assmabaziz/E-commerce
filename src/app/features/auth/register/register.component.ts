import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedModule } from '../../../Shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initFormModels();
  }
  register(): void {
    console.log(this.registerForm.value);
  }
  navigateToForgetPasswordPage(): void {
    this.router.navigateByUrl('forgot-password');
  }
  navigateToLoginPage(): void {
    this.router.navigateByUrl("login")
  }
  private initFormModels(): void {
    this.registerForm = this.formbuilder.group({
      firstName:['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      lastName:['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      agreeTerms: [true],
    });
  }
}

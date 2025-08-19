import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../../../Shared/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean = true;
  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initFormModels();
  }
  signIn(): void {
    console.log(this.loginForm.value);
  }
  navigateToForgetPasswordPage(): void {
    this.router.navigateByUrl('forgot-password');
  }
  navigateToRegisterPage(): void {
    this.router.navigateByUrl('register');
  }
  private initFormModels(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false],
    });
  }
}

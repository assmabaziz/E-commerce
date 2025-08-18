import { Component } from '@angular/core';

import { MaterialModule } from '../../Shared/Modules/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})

export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initFormModels();
  }
  submitForm(): void {
    console.log(this.forgotPasswordForm.value);
  }

  navigateToLoginPage(): void {
    this.router.navigateByUrl('login');
  }
  private initFormModels(): void {
    this.forgotPasswordForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}

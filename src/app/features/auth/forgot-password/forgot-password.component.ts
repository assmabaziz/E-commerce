import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { SharedModule } from '@app/shared';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  private readonly location = inject(Location);
  private readonly formbuilder = inject(FormBuilder)
  
  ngOnInit(): void {
    this.initFormModels();
  }
  submitForm(): void {
    console.log(this.forgotPasswordForm.value);
  }

  navigateToLoginPage(): void {
    this.location.back();
  }
  private initFormModels(): void {
    this.forgotPasswordForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}

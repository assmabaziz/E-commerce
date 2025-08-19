import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
];
@NgModule({
  imports: modules,
  exports: modules
})
export class SharedModule {}

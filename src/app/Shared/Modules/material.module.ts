import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

const modules = [
   CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPseudoCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatIconModule,
    MatCheckboxModule
]
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }

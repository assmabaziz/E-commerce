import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';

const modules = [
   CommonModule,
    MatInputModule 
]
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }

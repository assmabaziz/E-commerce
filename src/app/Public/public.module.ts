import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

const components = [PublicComponent]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

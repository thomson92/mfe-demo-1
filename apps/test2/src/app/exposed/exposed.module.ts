import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExposedRoutingModule } from './exposed-routing.module';
import { ExposedComponent } from './exposed.component';


@NgModule({
  declarations: [
    ExposedComponent
  ],
  imports: [
    CommonModule,
    ExposedRoutingModule
  ]
})
export class ExposedModule { }

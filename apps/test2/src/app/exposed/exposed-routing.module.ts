import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExposedComponent } from './exposed.component';

const routes: Routes = [
  {
    path: '',
    component: ExposedComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExposedRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [
  { path: '', component: AnimalsComponent }, // Az alapértelmezett útvonal
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
  
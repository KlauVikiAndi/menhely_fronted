// src/app/pages/animals/animals.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { CatsService } from '../../services/cats.service'; // Relatív útvonal


@NgModule({
  declarations: [AnimalsComponent, CatsComponent, DogsComponent], // Ide deklarálod az összes komponenst
  imports: [
    CommonModule, 
    RouterModule,
    AnimalsRoutingModule
  ],
  providers: [CatsService] // Itt deklarálod a szolgáltatást
})
export class AnimalsModule {}

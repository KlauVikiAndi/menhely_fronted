// src/app/pages/animals/animals.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals.component';
import { PetsComponent } from './pets/pets.component';
import { AnimalsRoutingModule } from './animals-routing.module';
//import { PetsService } from '../../services/pets.service'; // Relatív útvonal
import { AnimalsadminService } from '@app/services/animalsadmin.service';
import { FormsModule } from '@angular/forms';
//import { SearchComponent } from './pets/search/search.component';




@NgModule({
  declarations: [AnimalsComponent, PetsComponent, ], // Ide deklarálod az összes komponenst
  imports: [
    CommonModule, 
    RouterModule,
    AnimalsRoutingModule,
    FormsModule,
  ],
  providers: [AnimalsadminService] // Itt deklarálod a szolgáltatást
})
export class AnimalsModule {}

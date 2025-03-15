import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals.component';
import { PetsComponent } from './pets/pets.component';
import { SearchComponent } from './pets/search/search.component'; // Keresés komponenst is importáljuk
import { PetProfileComponent } from './pets/pets-profile/pet-profile.component';

const routes: Routes = [
  { path: '', component: AnimalsComponent }, 
  { path: 'pets', component: PetsComponent }, // Összes állat
  { path: 'search', component: SearchComponent }, // Keresés
  { path: 'pets/:id', component: PetProfileComponent }, // Profil oldal
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }

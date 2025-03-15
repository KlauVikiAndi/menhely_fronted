import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { PetsComponent } from './pages/animals/pets/pets.component';
import { InformationComponent } from './pages/information/information.component';
import { ContactComponent } from './pages/information/contact/contact.component';
import { HowitworksComponent } from './pages/information/howitworks/howitworks.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MydataComponent } from './pages/profile/mydata/mydata.component';
import { FavoritesComponent } from './pages/profile/favorites/favorites.component';
import { ReservationsComponent } from './pages/profile/reservations/reservations.component';
import { AuthComponent } from './auth/auth.component';
import { PetProfileComponent } from './pages/animals/pets/pets-profile/pet-profile.component';
import { SearchComponent } from './pages/animals/pets/search/search.component';




  
  const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { 
      path: 'animals', 
      component: AnimalsComponent, 
      children: [
       // { path: '', redirectTo: 'pets', pathMatch: 'full' },
        { path: 'pets', component: PetsComponent },
        { path: 'pets/:id', component: PetProfileComponent }, // Dinamikus útvonal
        { path: 'search', component: SearchComponent },
      ] 
    },
    { 
      path: 'information', 
      component: InformationComponent, 
      children: [
        { path: 'contact', component: ContactComponent },
        { path: 'howitworks', component: HowitworksComponent },
      ] 
    },
    { 
      path: 'profile', 
      component: ProfileComponent, 
      children: [
        { path: 'mydata', component: MydataComponent },
        { path: 'favorites', component: FavoritesComponent },
        { path: 'reservations', component: ReservationsComponent },
      ] 
    },
    { path: 'auth', component: AuthComponent }, // Bejelentkezés és regisztráció egy helyen
    { path: '**', redirectTo: '/home' } // Hibás útvonal esetén a főoldalra dob
  ];
  
 


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  
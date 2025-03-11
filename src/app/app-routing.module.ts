import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { CatsComponent } from './pages/animals/cats/cats.component';
import { DogsComponent } from './pages/animals/dogs/dogs.component';
import { InformationComponent } from './pages/information/information.component';
import { ContactComponent } from './pages/information/contact/contact.component';
import { HowitworksComponent } from './pages/information/howitworks/howitworks.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MydataComponent } from './pages/profile/mydata/mydata.component';
import { FavoritesComponent } from './pages/profile/favorites/favorites.component';
import { ReservationsComponent } from './pages/profile/reservations/reservations.component';
import { AuthComponent } from './auth/auth.component';
import { CatProfileComponent } from './pages/animals/cats/cat-profile/cat-profile.component';
import { DogProfileComponent } from './pages/animals/dogs/dog-profile/dog-profile.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'animals', 
    component: AnimalsComponent, 
    children: [
      { path: '', redirectTo: 'cats', pathMatch: 'full' },
      { path: 'cats', component: CatsComponent },
      { path: 'cats/:id', component: CatProfileComponent }, // Dinamikus útvonal
      { path: 'dogs', component: DogsComponent },
      { path: 'dogs/:id', component: DogProfileComponent },
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

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ha nincs route, akkor a főoldalra irányít
  // Ide jöhetnek további route-ok is
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Főoldal auth-ra mutat
  { path: 'auth', component: AuthComponent }, // Bejelentkezés és regisztráció egy helyen
  { path: 'profile', component: ProfileComponent }, // Bejelentkezés után ide jut
  { path: '**', redirectTo: '/auth' } // Hibás útvonal esetén auth-ra dob
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

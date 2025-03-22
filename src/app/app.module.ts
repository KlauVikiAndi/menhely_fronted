import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './pages/profile/profile.module'; // ProfileModule importálása
import { InformationModule } from './pages/information/information.module'; // InformationModule importálása
import { AnimalsModule } from './pages/animals/animals.module'; // AnimalsModule importálása
import { PetsComponent } from './pages/animals/pets/pets.component'; // Csak ha közvetlenül itt is használni akarod
import { ContactComponent } from './pages/information/contact/contact.component'; // Csak ha közvetlenül itt is használni akarod
import { HowitworksComponent } from './pages/information/howitworks/howitworks.component';
import { AuthComponent } from './auth/auth.component';
import { PetProfileComponent } from './pages/animals/pets/pets-profile/pet-profile.component'; // Csak ha közvetlenül itt is használni akarod
import { SearchComponent } from './pages/animals/pets/search/search.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  { path: '', component: PetProfileComponent },
  { path: 'register', component: AuthComponent },
  { path: 'admin', component: AdminComponent },
  // További útvonalak hozzáadása
];



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent
  /*   AuthComponent,
    PetProfileComponent,
    AdminComponent, */
    //DogProfileComponent,


    // Ide csak azokat a komponenseket rakd, amelyeket itt használni szeretnél közvetlenül
    // Ha a ProfileModule-ban van deklarálva, nem kell itt deklarálni
    // Ha a CatsComponent vagy DogsComponent kell az AppModule-ba, akkor tartsd meg itt.
    // Ha nem kell, akkor vedd ki innen.
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    RouterModule.forRoot(routes),

    InformationModule,
    AnimalsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



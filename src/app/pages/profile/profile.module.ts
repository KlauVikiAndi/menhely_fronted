import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* import { ProfileRoutingModule } from './profile-routing.module'; */

import { ProfileComponent } from './profile.component';
import { MydataComponent } from './mydata/mydata.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationsComponent } from './reservations/reservations.component'; 
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent, MydataComponent, FavoritesComponent, ReservationsComponent],
  imports: [
    CommonModule, RouterModule, ProfileRoutingModule
  ],
}) // Route for Profile
 
export class ProfileModule {}


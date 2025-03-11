import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MydataComponent } from './mydata/mydata.component';

const routes: Routes = [
  { path: 'mydata', component: MydataComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'reservations', component: ReservationsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

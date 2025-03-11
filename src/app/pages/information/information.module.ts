import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InformationComponent } from './information.component';
import { ContactComponent } from './contact/contact.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { InformationRoutingModule } from './information-routing.module';

@NgModule({
  declarations: [InformationComponent, ContactComponent, HowitworksComponent],
  imports: [
    CommonModule,
    RouterModule, InformationRoutingModule// Route for Information
  ],
})
export class InformationModule {}


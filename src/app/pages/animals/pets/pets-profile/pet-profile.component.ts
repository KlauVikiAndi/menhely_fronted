import { Component, OnInit } from '@angular/core';
//import { PetsService } from 'src/app/services/pets.service';
import { AnimalsadminService } from 'src/app/services/animalsadmin.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  pets: any[] = []; // Az állatok tárolása
  error: string = ''; // Hibaüzenet

  constructor(private AnimalsadminService: AnimalsadminService) {}

  ngOnInit(): void {
    this.AnimalsadminService.getAnimals().subscribe(
      (data: any[]) => {
        this.pets = data;
      },
      (error: any) => {
        this.error = 'Hiba történt az állatok betöltésekor!';
        console.error(error);
      }
    );
  }

  // Itt adjuk hozzá a getSizeLabel metódust
  getSizeLabel(sizeId: number): string {
    switch (sizeId) {
      case 1: return 'Kicsi';
      case 2: return 'Közepes';
      case 3: return 'Nagy';
      default: return 'Ismeretlen';
    }
  }
}

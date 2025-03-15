import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
  pets: any[] = [];

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPets().subscribe(
      (data) => {
        console.log('Lekért adatok:', data);
        this.pets = data; // Az állatok betöltése
      },
      (error) => {
        console.error('Hiba történt az adatok lekérésekor:', error);
      }
    );
  }


  getSizeLabel(size_id: number): string {
    switch (size_id) {
      case 1: return 'Kicsi';
      case 2: return 'Közepes';
      case 3: return 'Nagy';
      default: return 'Ismeretlen';
    }
  }

  
}

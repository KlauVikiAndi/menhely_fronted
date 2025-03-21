import { Component, OnInit } from '@angular/core';
//import { PetsService } from 'src/app/services/pets.service';
import { AnimalsadminService } from '@app/services/animalsadmin.service';
import { Router } from '@angular/router'; // Importáld a Router-t

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: any = []; // Az állatok tárolása
  error: string = ''; // Hibaüzenet

  //constructor(private petsService: PetsService, private router: Router) {} // Add hozzá a router-t
  constructor(private AnimalsadminService: AnimalsadminService, private router: Router) {} 
  ngOnInit(): void {
    this.AnimalsadminService.getAnimals().subscribe(
      (pets: any) => {
        this.pets = pets.data;
      },
      (error: any) => {
        this.error = 'Hiba történt az állatok betöltésekor!';
        console.error(error);
      }
    );
  }

  // Hozzáadjuk a goToProfile metódust, hogy a felhasználót az állat profiljára irányítsuk
  goToProfile(petId: number): void {
    this.router.navigate([`/pet-profile/${petId}`]); // Navigálunk az adott állat profiljára
  }
}

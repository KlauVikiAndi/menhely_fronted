import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = ''; // A keresett állat neve
  searchResults: any[] = [];

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    // Amikor betöltődik a komponens, az állatok listáját lekérjük
    this.loadAnimals();
  }

  loadAnimals() {
    // Az állatok lekérése a backendről
    this.petsService.getAllAnimals().subscribe(
      (animals) => {
        this.searchResults = animals; // Az állatok megjelenítése
      },
      (error) => {
        console.error("Hiba történt az állatok betöltésekor:", error);
      }
    );
  }

  onSearch() {
    this.petsService.searchPets(this.searchQuery).subscribe(
      results => {
        this.searchResults = results; // A keresési eredmények megjelenítése
      },
      error => {
        console.error("Hiba történt a keresés közben:", error);
      }
    );
  }
}

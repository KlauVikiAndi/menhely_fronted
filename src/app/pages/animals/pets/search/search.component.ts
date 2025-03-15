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
    // Itt bármikor be lehet indítani a keresést, pl. a query alapján
  }

  onSearch() {
    this.petsService.searchPets(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }
}

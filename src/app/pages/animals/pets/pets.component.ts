import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from '../../../services/pets.service'; // Továbbra is a PetsService

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any[] = [];

  constructor(private petsService: PetsService, private router: Router) {}

  ngOnInit(): void {
    this.petsService.getPets().subscribe(pets => {
      console.log(pets); 
      this.pets = pets; // Az összes kutya és macska
    });
  }

  goToProfile(petId: number) {
    this.router.navigate(['/animals/pets', petId]); // Navigálás az adott állat profiljára
  }
}

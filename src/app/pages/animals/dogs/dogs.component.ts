import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs = [
    { id: 1, name: 'Kutya 1', image: 'assets/images/kutya1.jpg' },
    { id: 2, name: 'Kutya 2', image: 'assets/images/kutya2.jpg' },
    { id: 3, name: 'Kutya 3', image: 'assets/images/kutya1.jpg' },
    { id: 4, name: 'Kutya 4', image: 'assets/images/kutya2.jpg' },
    { id: 5, name: 'Kutya 5', image: 'assets/images/kutya1.jpg' },
    { id: 6, name: 'Kutya 6', image: 'assets/images/kutya2.jpg' },
    { id: 7, name: 'Kutya 7', image: 'assets/images/kutya1.jpg' },
    { id: 8, name: 'Kutya 8', image: 'assets/images/kutya2.jpg' },
    { id: 9, name: 'Kutya 9', image: 'assets/images/kutya1.jpg' },
    { id: 10, name: 'Kutya 10', image: 'assets/images/kutya2.jpg' },
    { id: 11, name: 'Kutya 11', image: 'assets/images/kutya1.jpg' },
    { id: 12, name: 'Kutya 12', image: 'assets/images/kutya2.jpg' },
    { id: 13, name: 'Kutya 13', image: 'assets/images/kutya1.jpg' },
    { id: 14, name: 'Kutya 14', image: 'assets/images/kutya2.jpg' },
    { id: 15, name: 'Kutya 15', image: 'assets/images/kutya1.jpg' },
    { id: 16, name: 'Kutya 16', image: 'assets/images/kutya2.jpg' },
  ];

  constructor(private router: Router) {}

  goToProfile(dogId: number) {
    console.log('Kattintott kutya ID:', dogId); 
    this.router.navigate(['/animals/dogs', dogId]);
  }
}

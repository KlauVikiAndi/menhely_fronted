import { Component, OnInit } from '@angular/core';
//import { PetsService } from 'src/app/services/pets.service';
import { AnimalsadminService } from '@app/services/animalsadmin.service';
import { Router } from '@angular/router'; // Importáld a Router-t
import { HttpHeaders } from '@angular/common/http';

// Felvesszük a kedvenc típusát
interface Favorite {
  animal: {
    id: number;
    name: string;
    type: string;
    size: string;
    description: string;
    image: string;
    gender: string;
  };
}

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: any = []; // Az állatok tárolása
  userFavorites: Favorite[] = []; // Felhasználó kedvenceinek tárolása
  error: string = ''; // Hibaüzenet
  token: string | null = '';

  //constructor(private petsService: PetsService, private router: Router) {} // Add hozzá a router-t
  constructor(private AnimalsadminService: AnimalsadminService, private router: Router) {} 
  ngOnInit(): void {
    setTimeout(() => {
      this.token = localStorage.getItem('token');
      console.log('Elmentett token késleltetés után:', this.token);
    }, 1000);  // 1 másodperc késleltetés
    //this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    this.AnimalsadminService.getAnimals().subscribe(
      (pets: any) => {
        this.pets = pets.data;
      },
      (error: any) => {
        this.error = 'Hiba történt az állatok betöltésekor!';
        console.error(error);
      }
    );
   
    //this.getUserFavorites();
  }
// Kedvenc hozzáadása
  addToFavorites(petId: number): void {
    console.log("Kattintottam! petId:", petId); 
    const token = localStorage.getItem('auth_token'); // Token kiolvasása a localStorage-ból
    console.log("Elmentett token:", token); 
    if (!this.token || this.token === 'null') {
      console.log('Nincs autentikált felhasználó!');
    } else {
      console.log('Token sikeresen betöltve:', this.token);
    }

      // HTTP fejléc létrehozása
      //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`});

        // API hívás a tokennel
    this.AnimalsadminService.addToFavorites(petId, headers).subscribe(
    (response) => {
      console.log('Kedvenc hozzáadva:', response);
      this.getUserFavorites();  // Frissítjük a kedvenceket
    },
    (error) => {
      console.error('Hiba történt a kedvenc hozzáadása közben:', error);
    }
  );
}

// Kedvenc eltávolítása
removeFromFavorites(petId: number): void {
  this.AnimalsadminService.removeFromFavorites(petId).subscribe(
    (response) => {
      console.log('Kedvenc eltávolítva:', response);
      this.getUserFavorites();  // Frissítjük a kedvenceket
    },
    (error) => {
      console.error('Hiba történt a kedvenc eltávolítása közben:', error);
    }
  );
}

// Felhasználó kedvenceinek lekérése
getUserFavorites(): void {
  this.AnimalsadminService.getUserFavorites().subscribe(
    (favorites: any) => {
      this.userFavorites = favorites;
    },
    (error) => {
      console.error('Hiba történt a kedvencek lekérésekor:', error);
    }
  );
}

// Ellenőrizzük, hogy az állat a kedvencek között van-e
isFavorite(petId: number): boolean {
  return !!this.userFavorites.find(fav => fav.animal.id === petId);}

  bookAppointment(pet: any): void {
    console.log(`Időpont foglalása: ${pet.name}`);

    // Ide jöhet a funkció, hogy foglalj időpontot

  // Hozzáadjuk a goToProfile metódust, hogy a felhasználót az állat profiljára irányítsuk
 /*  goToProfile(petId: number): void {
    this.router.navigate([`/pet-profile/${petId}`]); // Navigálunk az adott állat profiljára
  } */

}}

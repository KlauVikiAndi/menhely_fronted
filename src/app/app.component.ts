import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animals: any[] = []; // Kezdetben egy üres tömb
  pets: any[] = [];
  isLoggedIn = false;
  username = '';
  errorMessage = '';

  constructor(private http: HttpClient) {
    // Ellenőrizzük a bejelentkezést
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
      this.username = JSON.parse(user).username;
    }

    // Az állatok lekérése
    this.http.get('http://localhost:8000/api/animals', { responseType: 'json' }).subscribe(
      (response: any) => {
        // Ellenőrizzük, hogy a válaszban lévő `data` valóban egy tömb
        if (response && response.success && Array.isArray(response.data)) {
          this.animals = response.data; // Ha `data` tömb, hozzárendezzük
        } else {
          this.errorMessage = 'Hibás adatformátum. Az állatok listája nem található.';
        }
      },
      (error) => {
        // Hibakezelés
        if (error.error instanceof ErrorEvent) {
          // A hálózati hibák kezelése
          this.errorMessage = 'Hálózati hiba történt: ' + error.error.message;
        } else {
          // HTTP hibák kezelése
          this.errorMessage = 'Hiba történt az állatok lekérésekor: ' + error.message;
        }
        console.error('Hiba:', error); // További hiba részletezés
      }
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
    window.location.reload();
  }
}

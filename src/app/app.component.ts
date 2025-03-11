import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This must match the selector in your `index.html`
  standalone: false,
  templateUrl: './app.component.html', // Ensure this points to the correct file
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn = false;
  username = '';

  constructor() {
    // Példa: Ellenőrizzük, hogy be van-e jelentkezve a felhasználó
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
      this.username = JSON.parse(user).username;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
    window.location.reload();
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


interface LoginResponse {
  token: string;
  message?: string;
}


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  email: string = '';
  password: string = '';
  confirm_password: string = "";
  name: string = '';
  isLogin: boolean = true; // Állapotváltozó: igaz = bejelentkezés, hamis = regisztráció
  errorMessage: string = '';
  successMessage: string = '';


  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.name, this.password).subscribe(
      (response: any) => {
        console.log("Bejelentkezési válasz:", response); // ✅ Nézzük meg, mit küld a backend
  
        if (response.success && response.data && response.data.token) { // 🔍 Token kiolvasása a data-ból
          localStorage.setItem('token', response.data.token); // ✅ Token mentése
          console.log("Token elmentve:", localStorage.getItem('token')); // ✅ Ellenőrzés
          
          this.successMessage = 'Sikeres bejelentkezés!';
          this.errorMessage = ''; 
          this.router.navigate(['/dashboard']);
  
          setTimeout(() => {
            this.successMessage = ''; 
          }, 3000);
        } else {
          this.errorMessage = response.message || 'Bejelentkezés sikertelen';
          this.successMessage = ''; 
        }
      },
      error => {
        console.error("Hiba a bejelentkezéskor:", error);
        this.errorMessage = error.error.message || 'Hiba történt a bejelentkezés során';
        this.successMessage = ''; 
      }
    );
  }
  
  
  
  

  register() {
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = "Kérem, adjon meg egy érvényes e-mail címet.";
      return;
    }
  
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password,
    };
  
    this.authService.register(userData).subscribe(
      response => {
        this.successMessage = response.message; // ✅ Backendről kapott üzenet
        this.errorMessage = ''; // 🔄 Hibaüzenet törlése
        this.clearForm(); // ✅ Mezők ürítése
  
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error => {
        this.errorMessage = error.error.message || 'Hiba történt a regisztráció során';
        this.successMessage = ''; // 🔄 Sikertelen regisztráció esetén töröljük a sikeres üzenetet
      }
    );
  }
  clearForm() {                         
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirm_password = '';
  }
  
  
  // Email validáció
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  
  

  toggleForm() {
    this.isLogin = !this.isLogin; // Átváltás bejelentkezés és regisztráció között
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // A Laravel API URL

  constructor(private http: HttpClient) {}

  // Regisztrációs metódus
  register(userData: { name: string, email: string, password: string, confirm_password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Bejelentkezési metódus
  login(name: string, password: string) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { name, password });
  }
}

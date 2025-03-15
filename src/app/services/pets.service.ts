// pets.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = 'http://127.0.0.1:8000/api/animals'; 

  constructor(private http: HttpClient) {}

  getPets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchPets(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?search=${query}`);
  }
}

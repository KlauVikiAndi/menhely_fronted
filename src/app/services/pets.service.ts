import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = 'http://127.0.0.1:8000/api/animals'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Lekéri az összes állatot a backendről
  getAllAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Keresés alapú lekérdezés, amit már korábban is használtunk
  searchPets(query: string): Observable<any[]> {
    const params = new HttpParams().set('query', query); // A keresett állat neve
    return this.http.get<any[]>(`${this.apiUrl}/search`, { params });
  }
}

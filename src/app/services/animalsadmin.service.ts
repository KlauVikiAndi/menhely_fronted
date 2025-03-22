
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Az API válaszainak típusai
interface ApiResponse<T> {
  success: boolean;
  data: T[];
  message: string;
}

interface Type {
  id: number;
  type: string;
}

interface Gender {
  id: number;
  gender: string;
}

interface Size {
  id: number;
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalsadminService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // Állatok CRUD műveletek
  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/animals`);
  }

  addAnimal(animal: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/newanimal`, animal);
  }

  updateAnimal(animal: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateanimal`, animal);
  }

  deleteAnimal(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteanimal/${id}`);
  }

  // **Dropdown adatok lekérése**
  getTypes(): Observable<ApiResponse<Type>> {
    return this.http.get<ApiResponse<Type>>(`${this.apiUrl}/types`);
  }

  getGenders(): Observable<ApiResponse<Gender>> {
    return this.http.get<ApiResponse<Gender>>(`${this.apiUrl}/genders`);
  }

  getSizes(): Observable<ApiResponse<Size>> {
    return this.http.get<ApiResponse<Size>>(`${this.apiUrl}/sizes`);
  }
}

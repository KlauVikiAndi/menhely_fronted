import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'http://127.0.0.1:8000/api/animals'; // Általános animals végpont

  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        // Feltételezve, hogy a backend válasza így néz ki:
        // { success: true, data: [...] }
        console.log(response); // Ellenőrizzük, hogy a backend válasz jó
  
        // Ha van data mező, és az egy tömb
        if (response && Array.isArray(response.data)) {
          return response.data; // Visszaadjuk a tömböt
        } else {
          return []; // Ha nincs valid adat, üres tömböt adunk vissza
        }
      })
    );
  }
  
  
}

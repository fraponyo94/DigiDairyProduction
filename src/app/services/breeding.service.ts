import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedingService {
  
  constructor(private http: HttpClient) { }
  private baseUrl = 'api/breedings' ;

   // Add Breeding
   addBreeding( breeding: object ): Observable<object> {

    return this.http.post(`${this.baseUrl}`, breeding);
  }





}

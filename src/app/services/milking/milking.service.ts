import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilkingService {

 
  constructor(private http: HttpClient) { }
  private baseUrl = 'api/milking' ;

   // Add Milking Records
   addMilkingRecords( milking: object ): Observable<object> {
    return this.http.post(`${this.baseUrl}`, milking);
  }

}

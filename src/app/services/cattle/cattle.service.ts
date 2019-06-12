import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {  catchError } from 'rxjs/operators';

import { cattle } from 'src/app/models/cattles/cattle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CattleService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'api/cows' ;


 cows: cattle[] = [
   {
    cowTag: 'F001',
    name: 'Lando',
    breed: null,
    dateAcquired: null

   },
   {
    cowTag: 'Frtyui',
    name: 'Lando',
    breed: null,
    dateAcquired: null

   },
   {
    cowTag: 'Ftyuio',
    name: 'Lando',
    breed: null,
    dateAcquired: null

   }
 ];

  // Add cattle record

  addCattle( cattle: Object ): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cattle);
  }


  // Update cattle record
  updateCattle(id: string, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // Get cattle by Id
  getCattle(id: string): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

   // Remove cattle  records
  deleteCattleRecord(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  // Get all Cattle Records
  getAllCattleRecords(): Observable<any> {
    return this.http.get<cattle>(`${this.baseUrl}`).pipe(
      catchError((error: any) => {
           console.error(error);
           return of();
         }),
    );
  }



// Static cow entries
  StaticCows(): cattle[] {
    return this.cows;
  }


}

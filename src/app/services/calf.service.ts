import { Injectable } from '@angular/core';
import { calf } from '../models/calf';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalfService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'api/calfs' ;


   // Get all Calf Records
   getAllCalfRecords(): Observable<any> {
    return this.http.get<calf>(`${this.baseUrl}`).pipe(
      catchError((error: any) => {
           console.error(error);
           return of();
         }),
    );
  }
}

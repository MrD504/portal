import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json',
      'Allow-Control-Allow-Origin': 'http://localhost:4000'
    })
};

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  private baseUrl = "http://localhost:4000";
  constructor(private http: HttpClient) { }

  getCategories() {
    const url = `${this.baseUrl}/categories`;
    return this.http.get(url, httpOptions).pipe(
      catchError(this.handleError('getAll', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

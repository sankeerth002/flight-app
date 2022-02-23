import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { schedule } from '../Entity/schedule';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  baseUrl = "http://localhost:3000/schedule";

  constructor(private http: HttpClient) { }


  //Http-Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured . Handle it accordingly.
      console.error('An error occured:', error.error.message);
    } else {
      //backend returns unsuccessful code 
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    //return an observable with a user-facing error message
    return throwError(
      'Something bad happened, please retry');
  };

  // create item with the help of Post Method
  createItem(item: any): Observable<schedule> {
    return this.http.post<schedule>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  // get All data
  getList(): Observable<schedule> {
    return this.http.get<schedule>(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError))
  }
  // get data by flight-no
  getItem(flightNumber: number): Observable<schedule> {
    return this.http.get<schedule>(this.baseUrl + '/' + flightNumber)
      .pipe(retry(2), catchError(this.handleError))
  }

  //update data with flight-no
  updateItem(flightNumber: number, item : any): Observable<schedule>{
    return this.http.put<schedule>(this.baseUrl + '/' + flightNumber,
    JSON.stringify(item),this.httpOptions)
    .pipe(retry(2),catchError(this.handleError))
  }

  //delete data
  deleteItem(flightNumber:number){
    return this.http.delete<schedule>(this.baseUrl + '/' + flightNumber, this.httpOptions)
    .pipe(retry(2),catchError(this.handleError))
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../Entity/Airline';
import { schedule } from '../Entity/schedule';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "https://mocki.io/v1/9d45594e-6d51-4490-add1-ac4665aa1763";
  private baseURL1 = "";

  constructor(private httpclient: HttpClient) { }

  getAirlinesList(): Observable<Airline[]>{
    return this.httpclient.get<Airline[]>(`${this.baseURL}`);
  }
  getSchedulesList(): Observable<schedule[]>{
    return this.httpclient.get<schedule[]>(`${this.baseURL1}`);
  }
  createAirline(){
  }
}

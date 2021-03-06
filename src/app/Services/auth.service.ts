import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private http:HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('');
  //     return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }

  login(data: any):Observable<any>{
    return this.http.post(`${baseURL}/authenticate`,data);
  }
}

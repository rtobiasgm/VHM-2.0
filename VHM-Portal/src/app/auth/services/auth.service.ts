import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../models/requests/login-request.model';
import { TokenResponse } from '../models/responses/token-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private httpClient: HttpClient) { 
    if (this.getToken() != null) {
      this.loggedIn.next(true)
    }
  }

  login(loginRequest: LoginRequest): Observable<any>{
    return this.httpClient.post<TokenResponse>(`${environment.apiUrl}/Account/authenticate`, loginRequest);
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/'])    
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  isLoggedInGuard(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  storeToken(tokenValue: string){
    this.loggedIn.next(true);
    localStorage.setItem('token', tokenValue)
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuard {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (this.auth.isLoggedInGuard()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
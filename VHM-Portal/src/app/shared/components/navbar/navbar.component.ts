import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = true;
  isLoggedIn$: Observable<boolean> | undefined;
  
  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
    this.isLoggedIn = false;
  }
}

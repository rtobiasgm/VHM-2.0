import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private userStore: UserStoreService){}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (v) => {
          this.form.reset();
          this.userStore.setNameId(v.data.userName)
          this.authService.storeToken(v.data.jwToken)
          this.router.navigate(['customers'])          
        }
      });
    }
  }

  onLogout(){
    this.authService.logout();
  }

}

import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class AuthModule { }

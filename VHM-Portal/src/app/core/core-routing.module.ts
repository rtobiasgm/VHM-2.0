import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { OnlyLoggedInUsersGuard } from '../auth/guards/only-logged-in-users.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'customers', component: CustomerComponent, canActivate: [OnlyLoggedInUsersGuard]},   
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CoreRoutingModule { }
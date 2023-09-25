import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }

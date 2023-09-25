import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
     
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ]
})
export class SharedRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const ROUTES:Routes=[
  {path:'home', component:HomeComponent}
] 

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(ROUTES) ],
})
export class AppRoutingModule {}



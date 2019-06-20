import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/shared/search/search.component';

const APP_ROUTER: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'search/:name', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTER);

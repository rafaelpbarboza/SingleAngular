import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  ngOnInit() {
  }

  searchHero(res:string) {
    this.heroService.getSearchHero(res);
  }
}

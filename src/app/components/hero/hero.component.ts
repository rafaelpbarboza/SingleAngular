import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Heros } from './../../services/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  private heros: Heros [];

  constructor(private hero: HeroService, private route: Router) {
    this.heros = [];
  }

  ngOnInit() {
    this.heros = this.hero.getHero();
  }

  redirect(id: number) {
    this.route.navigate( ['/detail', id]);
  }
}

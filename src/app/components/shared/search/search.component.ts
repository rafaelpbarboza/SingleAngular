import { Component, OnInit } from '@angular/core';
import { HeroService, Heros } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heros:any;

  constructor(private heroservice:HeroService, private _activeRouter:ActivatedRoute) {
    this._activeRouter.params.subscribe(param =>{
      this.heros = this.heroservice.getSearchHero(param['name'])
    });
   }
  
  ngOnInit() {
  }

}

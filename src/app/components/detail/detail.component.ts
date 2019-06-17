import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  private hero:{};

  constructor(private _activateRouter:ActivatedRoute, 
              private _heroService:HeroService,
              private _router:Router) { 
    this._activateRouter.params.subscribe(param =>{
        this.hero = this._heroService.getOneHero(param['id'])
    })
  }

  redirect(){
    this._router.navigate(['/hero'])
  }
  ngOnInit() {
  }

}

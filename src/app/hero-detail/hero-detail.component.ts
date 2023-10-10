import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute, // holds information about the route
    private heroService: HeroService, // gets hero data from the remote server
    private location: Location //  Angular service for interacting with the browser
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    // Static image of the route information
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  @Input() hero?: Hero;


}


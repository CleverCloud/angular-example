import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    /*Asynchronous signature: 
    Use this to avoid a UI freeze while it waits for the server's reponse!*/
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

    /* Synchronous signature.
    This approach won't work in a real application that uses asynchronous calls.
    It works now because our service synchronously returns mock heroes.
    This method WON'T WORK when HeroService will be making actual requests of a
    remote server*/
    /*this.heroes = this.heroService.getHeroes();*/
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

    
  
}

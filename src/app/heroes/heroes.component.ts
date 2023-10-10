import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  
  heroes: Hero[] = [];
  

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Selected hero id=${hero.id}`);

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

    
  
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/* Service here is provided at the root level.
Angular creates a single, shared instance of HeroService and injects 
into any class that asks for it.
Registering the provider in the @Injectable metadata also allows Angular
to optimize an application by removing the service if it isn't used. */
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService) { }

  

// Async signature
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // To do: add error handling
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}

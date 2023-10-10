import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

/* Service here is provided at the root level.
Angular creates a single, shared instance of HeroService and injects 
into any class that asks for it.
Registering the provider in the @Injectable metadata also allows Angular
to optimize an application by removing the service if it isn't used. */
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  


getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
  }
}

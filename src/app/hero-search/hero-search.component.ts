import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  // Declare heroes$ as an Observable
  heroes$!: Observable<Hero[]>;
  // searchTerms property
  private searchTerms = new Subject<string>(); /* = source
  of observable values and an Observable itself */


  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  /* IMPORTANT: Method to avoid excessive HTTP requests to reduce server consumption
  => sequence of RxJSS operators that reduce the number of calls */
  
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      /* switch to new search observable each time the term changes
      =>preserves the original request order while returning only the
      observable from the most recent HTTP method call.
      Results from prior calls are canceled and discarded.*/
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}

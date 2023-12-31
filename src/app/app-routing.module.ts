import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/*  Routes tell the Router which view to display when a user clicks a link
or pastes a URL into the browser address bar. */
const routes: Routes = [
  // Path needs to be a string that matches the URL in the browser address bar
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // Parameterized route that matches the path pattern to the hero detail view.
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
  
];

// Initialize the router and starts it listening for browser location changes
@NgModule({
  // Import RouterModel and configure it with the routes
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule] // Export RouterModule to be available throughout the application
})

export class AppRoutingModule { }

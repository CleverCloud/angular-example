import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*  Routes tell the Router which view to display when a user clicks a link
or pastes a URL into the browser address bar. */
const routes: Routes = [
  // Path needs to be a string that matches the URL in the browser address bar
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent }
  
];

// Initialize the router and starts it listening for browser location changes
@NgModule({
  // Import RouterModel and configure it with the routes
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule] // Export RouterModule to be available throughout the application
})

export class AppRoutingModule { }

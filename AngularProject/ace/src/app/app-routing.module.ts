import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfessionalsPageComponent } from './professionals/professionals-page/professionals-page.component';
import { JobsPageComponent } from './jobs/jobs-page/jobs-page.component';
import { PartnersPageComponent } from './partners/partners-page/partners-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home', component: HomePageComponent },
  { path : 'professionals', component: ProfessionalsPageComponent },
  { path : 'jobs', component: JobsPageComponent },
  { path : 'partners', component: PartnersPageComponent },
  { path : '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

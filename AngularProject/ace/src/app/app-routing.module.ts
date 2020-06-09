import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { HomePageComponent } from './home/home-page/home-page.component';
import { SignInPageComponent } from './auth/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './auth/sign-up-page/sign-up-page.component';
import { JobsPageComponent } from './jobs/jobs-page/jobs-page.component';
import { PartnersPageComponent } from './partners/partners-page/partners-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path : '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path : 'home',
    component: HomePageComponent,
    data: { title: 'Ace' },
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up/:role',
    component: SignUpPageComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'professionals',
    loadChildren: () => import('./professionals/professionals.module').then(m => m.ProfessionalsModule),
    data: { preload: true },
  },
  { path : 'jobs', component: JobsPageComponent },
  { path : 'partners', component: PartnersPageComponent },
  { path : '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: SelectivePreloadingStrategyService,
      },
      ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

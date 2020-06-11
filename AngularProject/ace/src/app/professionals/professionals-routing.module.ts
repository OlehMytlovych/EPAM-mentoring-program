import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';

const professionalsRoutes: Routes = [
  {
    path: '',
    component: ProfessionalsPageComponent,
    data: { title: 'Professionals' },
  },
  {
    path: ':category',
    component: ProfessionalsPageComponent,
    data: { title: 'Professionals' },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(professionalsRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProfessionalsRoutingModule { }

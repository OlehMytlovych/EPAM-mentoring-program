import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersPageComponent } from './partners-page/partners-page.component';

@NgModule({
  declarations: [PartnersPageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PartnersPageComponent,
  ],
})
export class PartnersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';

@NgModule({
  declarations: [ProfessionalsPageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfessionalsPageComponent,
  ],
})
export class ProfessionalsModule { }

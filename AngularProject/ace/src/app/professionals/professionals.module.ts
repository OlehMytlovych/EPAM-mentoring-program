import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProfessionalsPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ProfessionalsPageComponent,
  ],
})
export class ProfessionalsModule { }

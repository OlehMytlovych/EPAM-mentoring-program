import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';

import { HttpClientModule } from '@angular/common/http'; 0;
import { ProfessionalsRoutingModule } from './professionals-routing.module';

@NgModule({
  declarations: [ProfessionalsPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfessionalsRoutingModule,
  ],
})
export class ProfessionalsModule { }

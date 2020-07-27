import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalsRoutingModule } from './professionals-routing.module';

import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';
import * as fromProfessionals from './store/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { ProfessionalsEffects } from './store/effects/professionals.effects';
import { ProfessionalsItemComponent } from './professionals-item/professionals-item.component';

@NgModule({
  declarations: [ProfessionalsPageComponent, ProfessionalsItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfessionalsRoutingModule,
    StoreModule.forFeature(fromProfessionals.professionalsFeatureKey, fromProfessionals.reducer),
    EffectsModule.forFeature([ProfessionalsEffects]),
  ],
})
export class ProfessionalsModule { }

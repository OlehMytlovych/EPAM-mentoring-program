import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsPageComponent } from './jobs-page/jobs-page.component';

@NgModule({
  declarations: [JobsPageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    JobsPageComponent,
  ],
})
export class JobsModule { }

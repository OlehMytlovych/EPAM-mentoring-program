import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { ProfessionalFormComponent } from './sign-up-page/professional-form/professional-form.component';
import { CustomerFormComponent } from './sign-up-page/customer-form/customer-form.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [ProfessionalFormComponent, CustomerFormComponent, SignInPageComponent, SignUpPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class AuthModule { }

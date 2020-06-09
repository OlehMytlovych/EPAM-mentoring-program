import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { ProfessionalFormComponent } from './sign-up-dialog/professional-form/professional-form.component';
import { CustomerFormComponent } from './sign-up-dialog/customer-form/customer-form.component';

@NgModule({
  declarations: [SignInDialogComponent, SignUpDialogComponent, ProfessionalFormComponent, CustomerFormComponent],
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

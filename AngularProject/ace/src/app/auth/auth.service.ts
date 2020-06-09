import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(public dialog: MatDialog) { }

  public openSignInDialog(): MatDialogRef<SignInDialogComponent, any> {
    return this.dialog.open(SignInDialogComponent, {
      width: '500px',
    });
  }

  public openSignUpDialog(role: string): MatDialogRef<SignUpDialogComponent, any> {
    return this.dialog.open(SignUpDialogComponent, {
      width: '700px',
      data: {
        role,
      },
    });
  }
}

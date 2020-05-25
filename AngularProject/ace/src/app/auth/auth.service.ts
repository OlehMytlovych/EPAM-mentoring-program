import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(public dialog: MatDialog) { }

  public openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The sign in dialog was closed');
    });
  }

  public openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The sign up dialog was closed');
    });
  }
}

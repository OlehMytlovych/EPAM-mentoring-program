import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  role: string;
}

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],
})
export class SignUpDialogComponent implements OnInit {
  public isCustomer: boolean;
  public isProfessional: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
    this.isCustomer = this.dialogData.role === 'customer';
    this.isProfessional = this.dialogData.role === 'professional';
  }

  public ngOnInit(): void {

  }

}

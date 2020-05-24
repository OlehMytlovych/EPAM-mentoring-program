import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-job-dialog',
  templateUrl: './new-job-dialog.component.html',
  styleUrls: ['./new-job-dialog.component.scss'],
})
export class NewJobDialogComponent implements OnInit {
  public date: Date;

  constructor(
    public dialogRef: MatDialogRef<NewJobDialogComponent>) {
    this.date = new Date();
  }

  public ngOnInit(): void {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onCreateClick(): void {
    this.dialogRef.close();
  }
}

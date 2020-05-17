import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewJobDialogComponent } from '../new-job-dialog/new-job-dialog.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public name: string;
  public date: Date;

  constructor(public dialog: MatDialog) {
    this.name = 'Alex';
    this.date = new Date();
  }

  public ngOnInit(): void {
  }

  public openNewJobDialog(): void {
    const dialogRef = this.dialog.open(NewJobDialogComponent, {
      width: '250px',
      data: { name: this.name, date: this.date },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The new job dialog was closed');
    });
  }

}

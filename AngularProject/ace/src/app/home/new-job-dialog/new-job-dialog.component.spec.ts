import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobDialogComponent } from './new-job-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogRefMock } from '../../testing/matDialogRefMock';

describe('NewJobDialogComponent', () => {
  let component: NewJobDialogComponent;
  let fixture: ComponentFixture<NewJobDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewJobDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { MatDialogRefMock } }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

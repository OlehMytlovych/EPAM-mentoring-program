import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsItemComponent } from './professionals-item.component';

describe('ProfessionalsItemComponent', () => {
  let component: ProfessionalsItemComponent;
  let fixture: ComponentFixture<ProfessionalsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalsItemComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

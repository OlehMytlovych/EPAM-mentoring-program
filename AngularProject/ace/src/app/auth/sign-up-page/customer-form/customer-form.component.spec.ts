import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,

      ],
      providers: [provideMockStore(), { provide: Router, useValue: routerSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generalForm should be invalid initially', () => {
    expect(component.generalForm.invalid).toBe(true);
  });

  it('generalForm should be invalid when no values submitted', () => {
    fillForm(component);
    expect(component.generalForm.invalid).toBe(true);
  });

  it('generalForm should be valid with required valid values', () => {
    fillForm(component, 'Jane', 'Jackson', '12345678900', 'savePass', 'savePass', 'mail@asd.asd');
    expect(component.generalForm.valid).toBe(true);
  });

  it('generalForm should be invalid with non-mathing passwords', () => {
    fillForm(component, 'Jane', 'Jackson', '12345678900', 'savePass', 'savePass1', 'mail@asd.asd');
    expect(component.generalForm.valid).toBe(false);
  });

  function fillForm(component: CustomerFormComponent, firstName = '', surname = '', phone = '', password = '', confirmPassword = '', email = '') {
    component.generalForm.controls['firstName'].setValue(firstName);
    component.generalForm.controls['surname'].setValue(surname);
    component.generalForm.controls['phone'].setValue(phone);
    component.generalForm.controls['password'].setValue(password);
    component.generalForm.controls['confirmPassword'].setValue(confirmPassword);
    component.generalForm.controls['email'].setValue(email);
  }
});

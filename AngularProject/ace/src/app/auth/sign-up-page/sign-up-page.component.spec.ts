import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRouteMock } from '../../testing/activatedRouteMock';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;
  let activatedRoute: ActivatedRouteMock;

  beforeEach(async(() => {

    activatedRoute = new ActivatedRouteMock();

    TestBed.configureTestingModule({
      declarations: [SignUpPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.setParamMap({ role: 'customer' });
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get value from activatedRoute ', () => {
    expect(component.registerAsCustomer).toBeTruthy();
  });
});

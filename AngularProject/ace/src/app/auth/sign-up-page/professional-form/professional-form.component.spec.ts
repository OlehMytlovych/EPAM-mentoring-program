import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { ProfessionalFormComponent } from './professional-form.component';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromStore from '../../../store/reducers/index';
import { Router } from '@angular/router';

fdescribe('ProfessionalFormComponent', () => {
  let mockStore: MockStore;
  let mockCategoriesSelector: MemoizedSelector<fromStore.State, string[]>;
  let component: ProfessionalFormComponent;
  let fixture: ComponentFixture<ProfessionalFormComponent>;
  const categories: string[] = [
    'testCategory1',
    'testCategory2',
    'testCategory3',
    'testCategory4',
  ];
  let el: HTMLElement;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  const queryCategoryCheckboxLabelText = (): string => {
    const text = fixture.debugElement.queryAll(By.css('.mat-checkbox-label'))[0].nativeElement.textContent;
    return text.trim();
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ProfessionalFormComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
      ],
      providers: [provideMockStore(), { provide: Router, useValue: routerSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ProfessionalFormComponent);
      component = fixture.componentInstance;
      mockStore = TestBed.inject(MockStore);
      mockCategoriesSelector = mockStore.overrideSelector(
        fromStore.selectCategories,
        categories,
      );
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select categories from store', (() => {
    mockStore.select(mockCategoriesSelector).subscribe(mockedCats => {
      expect(mockedCats).toBe(categories);
    });
  }));

  it('should display categories from store', (() => {
    expect(queryCategoryCheckboxLabelText().toLocaleLowerCase()).toBe(categories[0].toLocaleLowerCase());
  }));

  it('should call the onSubmit method', (() => {
    spyOn(component, 'onSubmit');

    el = fixture.debugElement.query(By.css('.submit-btn')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }));

  it('should set submitted to false when invalid', (() => {
    component.onSubmit();

    expect(component.submitted).toBeFalsy();
  }));

  it('generalForm should be invalid', () => {
    fillGeneralForm(component);

    expect(component.generalForm.valid).toBeFalsy();
  });

  it('generalForm should be valid', () => {
    fillGeneralForm(component, 'Jack', 'Newbie', ['electrician', 'superPuperPro']);

    expect(component.generalForm.valid).toBeTruthy();
  });

  it('detailsForm should be invalid: required', () => {
    fillDetailsForm(component);

    expect(component.detailsForm.valid).toBeFalsy();
  });

  it('detailsForm should be invalid: advanced validation', () => {
    fillDetailsForm(component, 'notValidEmail', '123', '123', '123');

    expect(component.detailsForm.valid).toBeFalsy();
  });

  it('detailsForm should be valid', () => {
    fillDetailsForm(component, 'jennice@awda.com', '12345678900', 'Lviv', '12345');

    expect(component.detailsForm.valid).toBeTruthy();
  });

  it('finalForm should be invalid: required', () => {
    fillFinalForm(component);

    expect(component.finalForm.valid).toBeFalsy();
  });

  it('finalForm should be invalid: match', () => {
    fillFinalForm(component, 'qwerty', 'werty');

    expect(component.finalForm.valid).toBeFalsy();
  });

  it('finalForm should be valid', () => {
    fillFinalForm(component, 'qwerty', 'qwerty');

    expect(component.finalForm.valid).toBeTruthy();
  });

  it('should set submitted to false when call the onSubmit method with invalid form', () => {
    spyOn(component, 'onSubmit');

    el = fixture.debugElement.query(By.css('.submit-btn')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('all three forms should be valid', () => {
    fillGeneralForm(component, 'Jack', 'Newbie', ['electrician', 'superPuperPro']);
    fillDetailsForm(component, 'jennice@awda.com', '12345678900', 'Lviv', '12345');
    fillFinalForm(component, 'qwerty', 'qwerty');

    expect(component.generalForm.valid).toBeTruthy();
    expect(component.detailsForm.valid).toBeTruthy();
    expect(component.finalForm.valid).toBeTruthy();
  });

  it('submitting of valid forms should set submitted to true and navigate to home page', () => {

    fillGeneralForm(component, 'Jack', 'Newbie', ['electrician', 'superPuperPro']);
    fillDetailsForm(component, 'jennice@awda.com', '12345678900', 'Lviv', '12345');
    fillFinalForm(component, 'qwerty', 'qwerty');

    expect(component.generalForm.valid).toBeTruthy();
    expect(component.detailsForm.valid).toBeTruthy();
    expect(component.finalForm.valid).toBeTruthy();

    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  function fillGeneralForm(component: ProfessionalFormComponent, firstName = '', surname = '', categories: string[] = []) {
    component.generalForm.controls['firstName'].setValue(firstName);
    component.generalForm.controls['surname'].setValue(surname);

    const formArray: FormArray = component.generalForm.get('categories') as FormArray;
    categories.forEach(cat => formArray.push(new FormControl(cat)));
  }

  function fillDetailsForm(component: ProfessionalFormComponent, email = '', phone = '0', address = '', citizenId = '0') {
    component.detailsForm.controls['email'].setValue(email);
    component.detailsForm.controls['phone'].setValue(phone);
    component.detailsForm.controls['address'].setValue(address);
    component.detailsForm.controls['citizenId'].setValue(citizenId);
  }

  function fillFinalForm(component: ProfessionalFormComponent, password = '', confirmPassword = '') {
    component.finalForm.controls['password'].setValue(password);
    component.finalForm.controls['confirmPassword'].setValue(confirmPassword);
  }
});

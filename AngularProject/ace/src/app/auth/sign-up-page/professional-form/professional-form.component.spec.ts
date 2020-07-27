import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { ProfessionalFormComponent } from './professional-form.component';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromStore from '../../../store/reducers/index';

describe('ProfessionalFormComponent', () => {
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
      providers: [provideMockStore()],
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
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select categories from store', async(() => {
    fixture.detectChanges();

    expect(queryCategoryCheckboxLabelText().toLocaleLowerCase()).toBe(categories[0].toLocaleLowerCase());
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');

    el = fixture.debugElement.query(By.css('.submit-btn')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }));

  it('should set submitted to false when invalid', async(() => {
    fixture.detectChanges();
    component.onSubmit();

    expect(component.submitted).toBeFalsy();
  }));

  it('generalForm should be invalid', (async () => {
    fixture.detectChanges();
    component.generalForm.controls['firstName'].setValue('');
    component.generalForm.controls['surname'].setValue('');

    expect(component.generalForm.valid).toBeFalsy();
  }));

  it('generalForm should be valid', (async () => {
    fixture.detectChanges();
    component.generalForm.controls['firstName'].setValue('jack');
    component.generalForm.controls['surname'].setValue('test');

    const formArray: FormArray = component.generalForm.get('categories') as FormArray;
    formArray.push(new FormControl('dummyCheckboxValue'));
    formArray.push(new FormControl('dummyCheckboxValue'));

    expect(component.generalForm.valid).toBeTruthy();
  }));

  it('detailsForm should be invalid: required', (async () => {
    fixture.detectChanges();
    component.detailsForm.controls['email'].setValue('');
    component.detailsForm.controls['phone'].setValue('');
    component.detailsForm.controls['address'].setValue('');
    component.detailsForm.controls['citizenId'].setValue('');

    expect(component.detailsForm.valid).toBeFalsy();
  }));

  it('detailsForm should be invalid: advanced validation', (async () => {
    fixture.detectChanges();
    component.detailsForm.controls['email'].setValue('123');
    component.detailsForm.controls['phone'].setValue('123');
    component.detailsForm.controls['address'].setValue('123');
    component.detailsForm.controls['citizenId'].setValue('123');

    expect(component.detailsForm.valid).toBeFalsy();
  }));

  it('detailsForm should be valid', (async () => {
    fixture.detectChanges();
    component.detailsForm.controls['email'].setValue('jennice@awda.com');
    component.detailsForm.controls['phone'].setValue('12345678900');
    component.detailsForm.controls['address'].setValue('Lviv');
    component.detailsForm.controls['citizenId'].setValue('12345');

    expect(component.detailsForm.valid).toBeTruthy();
  }));

  it('finalForm should be invalid: required', (async () => {
    fixture.detectChanges();
    component.finalForm.controls['password'].setValue('');
    component.finalForm.controls['confirmPassword'].setValue('');

    expect(component.finalForm.valid).toBeFalsy();
  }));

  it('finalForm should be invalid: match', (async () => {
    fixture.detectChanges();
    component.finalForm.controls['password'].setValue('qwerty');
    component.finalForm.controls['confirmPassword'].setValue('asdawdaw');

    expect(component.finalForm.valid).toBeFalsy();
  }));

  it('finalForm should be valid', (async () => {
    fixture.detectChanges();
    component.finalForm.controls['password'].setValue('qwerty');
    component.finalForm.controls['confirmPassword'].setValue('qwerty');

    expect(component.finalForm.valid).toBeTruthy();
  }));
});

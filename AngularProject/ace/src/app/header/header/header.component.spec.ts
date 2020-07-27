import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromStore from '../../store/reducers/index';
import { userRoles } from 'src/app/userRoles';

describe('HeaderComponent', () => {
  let mockStore: MockStore;
  let mockCategoriesSelector: MemoizedSelector<fromStore.State, string[]>;
  let mockUserRoleSelector: MemoizedSelector<fromStore.State, number>;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const categories: string[] = [
    'testCategory1',
    'testCategory2',
    'testCategory3',
    'testCategory4',
  ];
  const userRole = userRoles.User;
  let isSignedIn: boolean;
  let de: DebugElement;
  let el: HTMLElement;

  const queryCategoryMenuItemText = (): string => {
    const profCategoriesBtns = fixture.debugElement.queryAll(By.css('.professionals-category-btn'));

    return profCategoriesBtns[profCategoriesBtns.length - 1].nativeElement.textContent.trim();
  };

  beforeEach(async(() => {
    isSignedIn = true;
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        BrowserModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      mockStore = TestBed.inject(MockStore);
      mockCategoriesSelector = mockStore.overrideSelector(
        fromStore.selectCategories,
        categories,
      );
      mockUserRoleSelector = mockStore.overrideSelector(
        fromStore.selectUserRole,
        userRole,
      );
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select display categories from store', async(() => {
    fixture.detectChanges();

    expect(queryCategoryMenuItemText().toLocaleLowerCase()).toBe(categories[categories.length - 1].toLocaleLowerCase());
  }));

  it('should show sign up/ in if user role is 0 (random user)', async(() => {
    fixture.detectChanges();
    const signUpBtnText = fixture.debugElement.query(By.css('.sign-up-btn')).nativeElement.textContent.trim().toLocaleLowerCase();
    const signInBtnText = fixture.debugElement.query(By.css('.sign-in-btn')).nativeElement.textContent.trim().toLocaleLowerCase();
    expect(signUpBtnText).toBe('up');
    expect(signInBtnText).toBe('in');
  }));

  it('should show sign out if user role is not 0 (not random user)', async(() => {
    mockUserRoleSelector.setResult(userRoles.Customer);
    mockStore.refreshState();
    fixture.detectChanges();
    const signOutBtnText = fixture.debugElement.query(By.css('.sign-out-btn')).nativeElement.textContent.trim().toLocaleLowerCase();
    expect(signOutBtnText).toBe('out');
  }));
});

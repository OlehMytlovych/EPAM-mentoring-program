import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProfessionalsEffects } from './professionals.effects';

describe('ProfessionalsEffects', () => {
  let actions$: Observable<any>;
  let effects: ProfessionalsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfessionalsEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(ProfessionalsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

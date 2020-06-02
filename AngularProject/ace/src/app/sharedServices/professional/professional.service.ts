import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professional, ProCategory } from '../../interfaces/professional';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  public configUrl = 'assets/mocks/professionals.json';
  // queriedCategory: string;
  constructor(private http: HttpClient,
              // @Inject('queriedCategory') private queriedCategory: string
              ) { }

  public getProfessionals(category: string) {
    console.log(category);
    return this.http.get<Professional[]>(this.configUrl).pipe(
      map(pros => {
        if (!category) { return pros; }

        return pros.filter((pro: Professional) => pro.categories.some((currentCategory: ProCategory) => {
          return currentCategory.categoryName === category ;
        }));
      }),
    );
  }
// pro.name.any(category => category.name === this.queriedCategory))
}

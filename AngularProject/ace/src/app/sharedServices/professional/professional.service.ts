import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professional, ProCategory } from '../../interfaces/professional';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  public configUrl = 'assets/mocks/professionals.json';

  constructor(private http: HttpClient) { }

  public getProfessionals(category: string) {
    return this.http.get<Professional[]>(this.configUrl).pipe(
      map((pros) => {
        if (!category) { return pros; }

        return pros.filter((pro: Professional) => pro.categories.some((currentCategory: ProCategory) => {
          return currentCategory.categoryName === category ;
        }));
      }),
    );
  }
}

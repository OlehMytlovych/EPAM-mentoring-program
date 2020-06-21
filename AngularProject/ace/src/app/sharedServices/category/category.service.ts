import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public configUrl = 'assets/mocks/categories.json';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<string[]>(this.configUrl);
  }
}

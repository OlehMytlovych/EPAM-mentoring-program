import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAdmin = false;
  public isCustomer = false;
  public isProfessional = false;

  constructor() { }

}

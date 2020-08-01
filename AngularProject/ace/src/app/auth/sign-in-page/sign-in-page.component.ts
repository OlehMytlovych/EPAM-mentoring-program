import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/index';
import * as UserRoleActions from '../../store/actions/user-role.actions';
import { userRoles } from '../../userRoles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  public loginForm: FormGroup;
  private submitted: boolean;
  constructor(private fb: FormBuilder,
              private store: Store<State>,
              private router: Router) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }
    this.submitted = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));

    this.store.dispatch(UserRoleActions.setUserRole({ data: userRoles.Customer }));
    this.router.navigate(['home']);
  }
}

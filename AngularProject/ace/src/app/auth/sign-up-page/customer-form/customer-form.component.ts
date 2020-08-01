import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../../../helpers/mustMatch';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../store/reducers/index';
import * as UserRoleActions from '../../../store/actions/user-role.actions';
import { userRoles } from '../../../userRoles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  public generalForm: FormGroup;
  private submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private router: Router) { }

  public ngOnInit(): void {
    this.generalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.pattern('[0-9 ]{11}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword'),
    });
  }

  public onSubmit() {
    // stop here if form is invalid
    if (this.generalForm.invalid) {
      this.submitted = false;
      return;
    }
    this.submitted = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.generalForm.value));
    this.store.dispatch(UserRoleActions.setUserRole({ data: userRoles.Customer }));
    this.router.navigate(['home']);
  }
}

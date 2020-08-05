import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MustMatch } from '../../../helpers/mustMatch';
import { Store, select } from '@ngrx/store';
import { State, selectCategories } from '../../../store/reducers/index';
import * as UserRoleActions from '../../../store/actions/user-role.actions';
import { userRoles } from '../../../userRoles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss'],
})
export class ProfessionalFormComponent implements OnInit {
  public categories$: Observable<string[]> = this.store.pipe(select(selectCategories));
  public generalForm: FormGroup;
  public detailsForm: FormGroup;
  public finalForm: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private router: Router) { }

  public ngOnInit(): void {
    this.submitted = false;

    this.generalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      categories: new FormArray([], Validators.required),
    });

    this.detailsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9 ]{11}')]],
      address: ['', Validators.required],
      citizenId: ['', [Validators.required, Validators.pattern('[0-9 ]{5}')]],
    });

    this.finalForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword'),
    },
    );
  }

  public onCheckChange(event) {
    const formArray: FormArray = this.generalForm.get('categories') as FormArray;

    if (event.checked){
      formArray.push(new FormControl(event.source.value));
    } else{
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.source.value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
  public checkIfAnyInvalid() {
    return this.generalForm.invalid || this.detailsForm.invalid || this.finalForm.invalid;
  }
  public onSubmit(/* checkIfAnyInvalid: () => boolean */) {
    // stop here if form is invalid
    if (this.generalForm.invalid || this.detailsForm.invalid || this.finalForm.invalid) {
      this.submitted = false;
      return 1;
    }
    this.submitted = true;

    const newPro = Object.assign({}, this.generalForm.value, this.detailsForm.value, this.finalForm.value);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(newPro));

    this.store.dispatch(UserRoleActions.setUserRole({ data: userRoles.Professional }));

    this.routeToHome();
  }

  private routeToHome() {
    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../sharedServices/category/category.service';
import { MustMatch } from '../../../helpers/mustMatch';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss'],
})
export class ProfessionalFormComponent implements OnInit {
  public categories: Observable<string[]>;
  public generalForm: FormGroup;
  public detailsForm: FormGroup;
  public finalForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService) { }

  public ngOnInit(): void {
    this.categories = this.categoryService.getAll();

    this.generalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      categories: new FormArray([]),
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
        if (ctrl.value == event.source.value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  public onSubmit() {
    // stop here if form is invalid
    if (this.generalForm.invalid || this.detailsForm.invalid || this.finalForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.generalForm.value) + '\n\n' + JSON.stringify(this.detailsForm.value) + '\n\n' + JSON.stringify(this.finalForm.value));
  }
}

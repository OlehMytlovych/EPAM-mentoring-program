import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  public registerAsCustomer: boolean;
  public registerAsProfessional: boolean;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    const role = this.route.snapshot.params.role;

    this.registerAsCustomer = role === 'customer' ? true : false;
    this.registerAsProfessional = role === 'professional' ? true : false;
  }
}

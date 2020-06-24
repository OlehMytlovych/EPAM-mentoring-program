import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit, OnDestroy {
  public registerAsCustomer: boolean;
  public registerAsProfessional: boolean;
  private allSubscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.allSubscriptions.add(this.route.paramMap.subscribe((pmap) => {
      const role = pmap.get('role');
      this.registerAsCustomer = role === 'customer' ? true : false;
      this.registerAsProfessional = role === 'professional' ? true : false;
    }));
  }

  public ngOnDestroy(): void {
    this.allSubscriptions.unsubscribe();
  }
}

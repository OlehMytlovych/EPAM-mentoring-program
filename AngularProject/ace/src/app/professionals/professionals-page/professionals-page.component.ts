import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfessionalService } from '../../sharedServices/professional/professional.service';
import { Professional } from '../../interfaces/professional';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professionals-page',
  templateUrl: './professionals-page.component.html',
  styleUrls: ['./professionals-page.component.scss'],
})
export class ProfessionalsPageComponent implements OnInit, OnDestroy {
  public professionals: Professional[];
  public category = '';
  private allSubscriptions: Subscription = new Subscription();

  constructor(private professionalService: ProfessionalService,
              private route: ActivatedRoute) { }

  public ngOnInit(): void {

    const queryParamsSubscription = this.route.params
                                .subscribe(params => {
                                  this.category = params['category'];
                                  this.getProfessionals();
                                });

    this.allSubscriptions.add(queryParamsSubscription);
  }

  public ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }

  private getProfessionals() {
    const getAllProsSubscription = this.professionalService.getProfessionals(this.category)
                              .subscribe(filteredPros => {
                                this.professionals = filteredPros;
                              });

    this.allSubscriptions.add(getAllProsSubscription);
  }
}

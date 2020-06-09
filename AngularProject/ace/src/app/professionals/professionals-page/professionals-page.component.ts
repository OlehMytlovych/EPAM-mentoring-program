import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfessionalService } from '../../sharedServices/professional/professional.service';
import { Professional, ProCategory } from '../../interfaces/professional';
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
  private queryParamsSubscription: Subscription;
  private getAllProsSubscription: Subscription;

  constructor(private professionalService: ProfessionalService,
              private route: ActivatedRoute) { }

  public ngOnInit(): void {

    this.queryParamsSubscription = this.route.params
                                .subscribe(params => {
                                  this.category = params['category'];
                                  this.getProfessionals();
                                });
  }

  public ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.getAllProsSubscription.unsubscribe();
  }

  private getProfessionals() {
    this.getAllProsSubscription = this.professionalService.getProfessionals(this.category)
                              .subscribe(filteredPros => {
                                this.professionals = filteredPros;
                              });
  }

}

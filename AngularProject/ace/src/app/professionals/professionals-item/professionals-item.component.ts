import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy  } from '@angular/core';
import { Professional } from '../../interfaces/professional';

@Component({
  selector: 'app-professionals-item',
  templateUrl: './professionals-item.component.html',
  styleUrls: ['./professionals-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalsItemComponent implements OnInit, OnChanges {
  @Input() public pro: Professional;
  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes): void {
    console.log(changes);
  }

  get runChangeDetection() {
    console.log('ProfessionalsItemComponent - Checking the view');
    return true;
  }

  public checkChangeDetection() {
    return true;
  }
}

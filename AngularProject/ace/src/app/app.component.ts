import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
  ) {}

  public ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe((event) => {
        let route = this.router.routerState.root.firstChild;
        while (route.firstChild) { route = route.firstChild; }

        this.setTitle(route.snapshot.data['title']);
      });
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

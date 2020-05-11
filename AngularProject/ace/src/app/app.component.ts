import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerClass: string = 'header-wrapper';
  contentClass: string = 'content-wrapper';
  footerClass: string = 'footer-wrapper';

  title = 'ace';
}

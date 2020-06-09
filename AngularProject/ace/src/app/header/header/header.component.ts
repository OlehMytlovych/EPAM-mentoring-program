import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../sharedServices/category/category.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public categories: Observable<string[]>;

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  public ngOnInit(): void {
    this.categories = this.categoryService.getAll();
  }

  public goToSignIn() {
    this.router.navigate(['sign-in']);
  }

  public goToRegistration(role: string) {
    this.router.navigate(['sign-up', role]);
  }
}

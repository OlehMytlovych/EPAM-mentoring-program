import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CategoryService } from '../../sharedServices/category/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public categories: Array<string>;
  private getAllCatsSubscription: Subscription;

  constructor(private authService: AuthService,
              private categoryService: CategoryService) { }

  public ngOnInit(): void {
    this.getAllCategories();
  }

  public ngOnDestroy(): void {
    this.getAllCatsSubscription.unsubscribe();
  }

  public openSignInDialog() {
    this.authService.openSignInDialog();
  }

  public openSignUpDialog(role: string) {
    this.authService.openSignUpDialog(role);
  }

  public getAllCategories() {
    this.getAllCatsSubscription = this.categoryService.getAll().subscribe((categories) => this.categories = categories);
  }

}

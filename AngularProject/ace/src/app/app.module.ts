import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';
import { PartnersModule } from './partners/partners.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    JobsModule,
    PartnersModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule { }

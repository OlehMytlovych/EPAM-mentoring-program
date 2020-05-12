import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ProfessionalsModule } from './professionals/professionals.module';
import { JobsModule } from './jobs/jobs.module';
import { PartnersModule } from './partners/partners.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    ProfessionalsModule,
    JobsModule,
    PartnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

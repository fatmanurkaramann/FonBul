import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PricingComponent } from './components/pricing/pricing.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LazyLoadDirective } from './components/directives/lazy-load.directive';
import { LandingContentComponent } from './components/home/landing-content/landing-content/landing-content.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContactComponent } from './components/home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    FooterComponent,
    LazyLoadDirective,
    LandingContentComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

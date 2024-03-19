import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InfoGridComponent } from "./shared/info-grid/info-grid.component";
import { CardsGridComponent } from "./shared/cards-grid/cards-grid.component";
import { TokenomicsSectionComponent } from "./shared/tokenomics-section/tokenomics-section.component";
import { RoadmapSectionComponent } from "./shared/roadmap-section/roadmap-section.component";
import { IntroCardsComponent } from "./shared/intro-cards/intro-cards.component";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { NewsletterSectionComponent } from "./shared/newsletter-section/newsletter-section.component";
import { HeroSectionComponent } from "./shared/hero-section/hero-section.component";
import { RotatingHeadlineComponent } from "./shared/rotating-headline/rotating-headline.component";
import { TokenomicsCardComponent } from "./shared/tokenomics-card/tokenomics-card.component";
import { HeroAlternativeComponent } from "./shared/hero-alternative/hero-alternative.component";
import { CoreFeaturesSectionComponent } from "./shared/core-features-section/core-features-section.component";
import { TokenomicsCarouselComponent } from "./shared/tokenomics-carousel/tokenomics-carousel.component";

const menu = document.querySelector(".menu-block");

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, InfoGridComponent, CardsGridComponent,
        TokenomicsSectionComponent, RoadmapSectionComponent, IntroCardsComponent, NewsletterSectionComponent, HeroSectionComponent, RotatingHeadlineComponent, TokenomicsCardComponent, HeroAlternativeComponent, CoreFeaturesSectionComponent, TokenomicsCarouselComponent]
})
export class AppComponent implements OnInit {


  
  currentState = 'start'; // Initial state

  constructor() {}
  ngOnInit(): void {


    this.loadScript('./assets/js/vendors/counterup.js');
    this.loadScript('./assets/js/vendors/swiper-bundle.min.js');
    this.loadScript('./assets/js/vendors/fslightbox.js');
    // this.loadScript('./assets/js/vendors/jos.min.js');
    this.loadScript('./assets/js/vendors/menu.js');

  }

  title = 'mcweb';

 loadScript(url: string) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.append(script);
    });
}

activeIndex: number | null = null;

toggleActive(index: number) {
  this.activeIndex = this.activeIndex === index ? null : index;
}

}



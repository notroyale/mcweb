import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InfoGridComponent } from "./shared/info-grid/info-grid.component";
import { CardsGridComponent } from "./shared/cards-grid/cards-grid.component";
import { TokenomicsSectionComponent } from "./shared/tokenomics-section/tokenomics-section.component";
import { RoadmapSectionComponent } from "./shared/roadmap-section/roadmap-section.component";
import { IntroCardsComponent } from "./shared/intro-cards/intro-cards.component";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
const menu = document.querySelector(".menu-block");

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, InfoGridComponent, CardsGridComponent,
      TokenomicsSectionComponent, RoadmapSectionComponent, IntroCardsComponent],

})
export class AppComponent implements OnInit {
  currentState = 'start'; // Initial state

  constructor() {}
  ngOnInit(): void {
    this.loadScript('./assets/js/vendors/menu.js');
    this.loadScript('./assets/js/vendors/jos.min.js');
    this.loadScript('./assets/js/vendors/swiper-bundle.min.js');
    this.loadScript('./assets/js/vendors/lenis.min.js');
    this.loadScript('./assets/js/vendors/counterup.js');
    this.loadScript('./assets/js/vendors/fslightbox.js');

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
 toggleTheme() {
  if (document.body.classList.contains("dark"))
      document.body.classList.remove("dark");
  else
      document.body.classList.add("dark");
}
toggleAnimation() {
  this.currentState = this.currentState === 'start' ? 'end' : 'start';
}

}



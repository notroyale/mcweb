import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CarouselModule } from '@marcreichel/angular-carousel';
import { TokenomicsSectionComponent } from "../tokenomics-section/tokenomics-section.component";


@Component({
    selector: 'app-tokenomics-carousel',
    standalone: true,
    templateUrl: './tokenomics-carousel.component.html',
    styleUrl: './tokenomics-carousel.component.scss',
    imports: [CommonModule, CarouselModule, TokenomicsSectionComponent]
})
export class TokenomicsCarouselComponent {
  screenWidth: number;
  mobileWidth = 576; // Change this to the width you consider as mobile

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
  }

  isMobile() {
    return this.screenWidth <= this.mobileWidth;
  }
}

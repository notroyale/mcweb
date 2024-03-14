import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-tokenomics-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './tokenomics-carousel.component.html',
  styleUrl: './tokenomics-carousel.component.scss'
})
export class TokenomicsCarouselComponent {

}

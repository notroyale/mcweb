import { Component } from '@angular/core';
import { RotatingHeadlineComponent } from "../rotating-headline/rotating-headline.component";

@Component({
    selector: 'app-core-features-section',
    standalone: true,
    templateUrl: './core-features-section.component.html',
    styleUrl: './core-features-section.component.scss',
    imports: [RotatingHeadlineComponent]
})
export class CoreFeaturesSectionComponent {

}

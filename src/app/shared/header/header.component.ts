import { Component } from '@angular/core';
import { AnnouncmentBannerComponent } from "../announcment-banner/announcment-banner.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AnnouncmentBannerComponent]
})
export class HeaderComponent {

}

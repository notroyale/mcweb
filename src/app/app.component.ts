import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Application } from '@splinetool/runtime';
import { HeaderComponent } from "./shared/header/header.component";
import { AnnouncmentBannerComponent } from "./shared/announcment-banner/announcment-banner.component";
import { IntroSectionComponent } from "./shared/intro-section/intro-section.component";
import { NewsletterComponent } from "./shared/newsletter/newsletter.component";
import { BentoSectionComponent } from "./shared/bento-section/bento-section.component";
import { HeroSectionComponent } from "./shared/hero-section/hero-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, AnnouncmentBannerComponent, IntroSectionComponent, NewsletterComponent, BentoSectionComponent, HeroSectionComponent]
})
export class AppComponent implements OnInit {
  title = 'sol';


  public ngOnInit() {
    const canvas: any = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/r4j7KrscsfNBh2Og/scene.splinecode');
  }


}

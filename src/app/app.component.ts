import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InfoGridComponent } from "./shared/info-grid/info-grid.component";
import { CardsGridComponent } from "./shared/cards-grid/cards-grid.component";
const menu = document.querySelector(".menu-block");

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, InfoGridComponent, CardsGridComponent]
})
export class AppComponent {
  title = 'mcweb';

  toggleMenu() {
    menu?.classList.toggle("active");
    document.querySelector(".menu-overlay")?.classList.toggle("active");
  }

}



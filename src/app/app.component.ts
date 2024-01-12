import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
const menu = document.querySelector(".menu-block");

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mcweb';
   
  toggleMenu() {
    menu?.classList.toggle("active");
    document.querySelector(".menu-overlay")?.classList.toggle("active");
  }

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-headline',
  standalone: true,
  imports: [],
  templateUrl: './rotating-headline.component.html',
  styleUrl: './rotating-headline.component.scss'
})
export class RotatingHeadlineComponent implements OnInit {




  ngOnInit(): void {
    setInterval(() => {
      const show = document.querySelector('span[data-show]')
      if (show) {
              const next = show.nextElementSibling || document.querySelector('span:first-child')
      const up = document.querySelector('span[data-up]')
      
      if (up) {
        up.removeAttribute('data-up')
      }
      
      show.removeAttribute('data-show')
      show.setAttribute('data-up', '')
      if(next) {
              next.setAttribute('data-show', '')
      }

      }

    }, 3000);
  }
}

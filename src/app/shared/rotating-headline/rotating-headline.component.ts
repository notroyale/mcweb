import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-headline',
  standalone: true,
  imports: [],
  templateUrl: './rotating-headline.component.html',
  styleUrl: './rotating-headline.component.scss',
})
export class RotatingHeadlineComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      const show = document.querySelector('span[data-show]');
      if (show) {
        var next =
          show.nextElementSibling || document.querySelector('span:first-child');
        const up = document.querySelector('span[data-up]');
        if (up) {
          up.removeAttribute('data-up');
        }

        show.removeAttribute('data-show');
        show.setAttribute('data-up', '');
        if (next != null && next != undefined && next.innerHTML != "") {
          console.log(next.innerHTML);
          next.setAttribute('data-show', '');
        }
        else {
          var firstChild = document.querySelector('.mask')?.firstElementChild;
          if(firstChild != null && firstChild != undefined ) {
            console.log('firstChild', firstChild);
                      next = firstChild;
                      next.setAttribute('data-show', '');


          }
        }
      }
    }, 3000);
  }
}

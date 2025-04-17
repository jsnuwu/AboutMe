import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const section = document.querySelector('.zoom-section') as HTMLElement;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.1;
      const triggerPoint2 = window.innerHeight * 0.2;
      const triggerPoint3 = window.innerHeight * 0.35;

      
      if( scrollY > triggerPoint3) {
        section.classList.add('zooming-out3');
      }else if (scrollY > triggerPoint2) {
        section.classList.add('zooming-out2');
        section.classList.remove('zooming-out');
      } else if (scrollY > triggerPoint) {
        section.classList.add('zooming-out');
        section.classList.remove('zooming-out2');
      } else {
        section.classList.remove('zooming-out', 'zooming-out2', 'zooming-out3');
      }
    });
  }
}
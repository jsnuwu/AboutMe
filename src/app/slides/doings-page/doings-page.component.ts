import { Component } from '@angular/core';
import { FourthComponent } from "../mountain-page/mountain-page.component";

@Component({
  selector: 'app-doings-page',
  imports: [ FourthComponent],
  templateUrl: './doings-page.component.html',
  styleUrl: './doings-page.component.css'
})
export class DoingsPageComponent {

  ngAfterViewInit(): void {
    const doingsBarContainer = document.querySelector('.doings-bar-container') as HTMLElement;
    const section = document.querySelector('.doings-section') as HTMLElement;
  
    let ticking = false;
  
    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const isVisible =
        sectionRect.top < window.innerHeight - 200 && sectionRect.bottom >= 0;
  
      if (isVisible) {
        doingsBarContainer.classList.add('show-mountain');
      } else {
        doingsBarContainer.classList.remove('show-mountain');
      }
  
      ticking = false;
    };
  
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    });
  }
  

}  
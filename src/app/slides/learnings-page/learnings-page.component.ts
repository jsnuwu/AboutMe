import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-learnings-page',
  imports: [],
  templateUrl: './learnings-page.component.html',
styleUrls: ['./learnings-page.component.css'] 
})
export class LearningsPageComponent implements AfterViewInit {

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stars = entry.target.querySelectorAll('.star') as NodeListOf<HTMLElement>;
          const moons = entry.target.classList.contains('moon')
            ? [entry.target as HTMLElement]
            : entry.target.querySelectorAll('.moon') as NodeListOf<HTMLElement>;
  
          stars.forEach(star => {
            star.style.animation = 'none';

            void star.offsetHeight;
            star.style.animation = ''; 
          });
  
          moons.forEach(moon => {
            moon.style.animation = 'none';
            void moon.offsetHeight;
            moon.style.animation = '';
          });

          
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.stars-trigger').forEach(starsBlock => {
      observer.observe(starsBlock);
    });
  }
}
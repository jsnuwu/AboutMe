import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const profileBarContainer = document.querySelector('.profile-bar-container') as HTMLElement;

    window.addEventListener('scroll', () => {
      const aboutSection = document.querySelector('.about-section') as HTMLElement;
      const aboutSectionRect = aboutSection.getBoundingClientRect();

      if (aboutSectionRect.top < window.innerHeight - 200 && aboutSectionRect.bottom >= 0) {
        profileBarContainer.classList.add('show-bar');
      } else {
        profileBarContainer.classList.remove('show-bar');
      }
    });
  }
}

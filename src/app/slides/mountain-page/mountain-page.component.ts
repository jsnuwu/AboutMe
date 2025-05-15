import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mountain-page',
  standalone: true,
  templateUrl: './mountain-page.component.html',
  styleUrl: './mountain-page.component.css'
})
export class FourthComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const sky = document.querySelector('.sky') as HTMLElement;
    const clouds = document.querySelectorAll('.cloud') as NodeListOf<HTMLElement>;
    const mountain = document.querySelector('.mountain') as HTMLElement;
    const section = document.querySelector('.doings-section') as HTMLElement;
    const fields = document.querySelector('.fields') as HTMLElement; 

let timeouts: number[] = [];

const handleScroll = () => {
  const sectionRect = section.getBoundingClientRect();
  const isVisible = sectionRect.top < window.innerHeight - 500 && sectionRect.bottom > 0;

  timeouts.forEach(id => clearTimeout(id));
  timeouts = [];

  if (isVisible) {
    const delaySky = 100;
    const delayMountain = 300;
    const delayField = 200;


    timeouts.push(window.setTimeout(() => {
      sky.classList.add('show-sky');
    }, delaySky));

    timeouts.push(window.setTimeout(() => {
      mountain.classList.add('show-mountain');
    }, delayMountain));

    timeouts.push(window.setTimeout(() => {
      fields.classList.add('show-fields');
    }, delayField));

  } else {
    sky.classList.remove('show-sky');
    clouds.forEach(cloud => cloud.classList.remove('show-cloud'));
    mountain.classList.remove('show-mountain');
     fields.classList.remove('show-fields');
  }
};


    window.addEventListener('scroll', handleScroll);
  }
}

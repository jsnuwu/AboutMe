import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class AgendaComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const section = this.elRef.nativeElement.querySelector('.agenda-section');
    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          section.classList.add('animate');
        } else {

          section.classList.remove('animate');
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section); 
  }
}

import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-rocket-transition',
  templateUrl: './rocket-transition.component.html',
  styleUrls: ['./rocket-transition.component.css'],
})
export class RocketTransitionComponent implements OnInit, OnDestroy {
  @Input() targetSelector!: string; 
  @ViewChild('rocket', { static: true }) rocketRef!: ElementRef;

  private observer!: IntersectionObserver;
  isAnimating = false;

  ngOnInit() {
    const target = document.querySelector(this.targetSelector);

    if (target) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.isAnimating) {
              this.launchRocket();
            }
          });
        },
        { threshold: 0.2,
          rootMargin: '0px 0px 0px 0px'
         }
      );

      this.observer.observe(target);
    }
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

launchRocket() {
  this.isAnimating = true;
  this.rocketRef.nativeElement.classList.add('animate');

  const futureSection = document.getElementById('futureSection');
  if (futureSection) {
    futureSection.classList.add('launched');
  }

  setTimeout(() => {
    this.rocketRef.nativeElement.classList.remove('animate');
    this.isAnimating = false;

    setTimeout(() => {
      if (futureSection) {
        futureSection.classList.remove('launched');
      }
    }, 3000);
  }, 1300);
}

}

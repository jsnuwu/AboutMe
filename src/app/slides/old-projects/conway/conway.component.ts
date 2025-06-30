import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-conway',
  imports: [],
  templateUrl: './conway.component.html',
  styleUrl: './conway.component.css'
})
export class ConwayComponent {

  @ViewChild('tiltImage', { static: true }) imageRef!: ElementRef<HTMLImageElement>;

onTilt(event: MouseEvent) {
  const image = this.imageRef.nativeElement;
  const bounds = image.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  const rotateX = -((event.clientY - centerY) / 20);
  const rotateY = ((event.clientX - centerX) / 20);

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

onTiltLeave(event: MouseEvent) {
  const image = this.imageRef.nativeElement;
  image.style.transform = 'rotateX(0deg) rotateY(0deg)';
}
}

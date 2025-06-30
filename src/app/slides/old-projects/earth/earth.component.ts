import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-earth',
  imports: [],
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent {

  @ViewChild('tiltImage', { static: true }) imageRef!: ElementRef<HTMLImageElement>;

onTilt(event: MouseEvent) {
  const image = this.imageRef.nativeElement;
  const bounds = image.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  const rotateX = -((event.clientY - centerY) / 50);
  const rotateY = ((event.clientX - centerX) / 50);

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

onTiltLeave(event: MouseEvent) {
  const image = this.imageRef.nativeElement;
  image.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

}

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class loadingComponent implements AfterViewInit {
ngAfterViewInit(): void {
  throw new Error('Method not implemented.');
}

@ViewChild('tiltLeftWrapper') tiltLeftWrapper!: ElementRef<HTMLDivElement>;
@ViewChild('tiltRightWrapper') tiltRightWrapper!: ElementRef<HTMLDivElement>;


onTilt(event: MouseEvent, side: 'left' | 'right') {
  const wrapper = side === 'left' ? this.tiltLeftWrapper.nativeElement : this.tiltRightWrapper.nativeElement;
  const bounds = wrapper.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  const rotateX = -((event.clientY - centerY) / 20);
  const rotateY = ((event.clientX - centerX) / 20);

  wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

onTiltLeave(side: 'left' | 'right') {
  const wrapper = side === 'left' ? this.tiltLeftWrapper.nativeElement : this.tiltRightWrapper.nativeElement;
  wrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

}

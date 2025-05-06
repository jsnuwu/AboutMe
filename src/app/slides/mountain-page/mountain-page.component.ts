import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mountain-page',
  standalone: true,
  templateUrl: './mountain-page.component.html',
  styleUrl: './mountain-page.component.css'
})
export class FourthComponent {
  @Input() isDarkMode: boolean = true;

  ngOnInit() {
    document.body.classList.toggle('light-mode', !this.isDarkMode);
  }
}  

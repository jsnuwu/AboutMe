import { Component } from '@angular/core';
import { FourthComponent } from "../mountain-page/mountain-page.component";

@Component({
  selector: 'app-doings-page',
  imports: [ FourthComponent],
  templateUrl: './doings-page.component.html',
  styleUrl: './doings-page.component.css'
})
export class DoingsPageComponent {
  isDarkMode = true;

  
}

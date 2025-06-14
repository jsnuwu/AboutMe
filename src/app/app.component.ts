import { Component, HostListener, AfterViewInit } from '@angular/core';
import { StartPageComponent } from "./slides/start-page/start-page.component";
import { AgendaComponent } from "./slides/agenda-page/agenda-page.component";
import { AboutMePageComponent } from "./slides/about-me-page/about-me-page.component";
import { DoingsPageComponent } from "./slides/doings-page/doings-page.component";
import { LearningsPageComponent } from "./slides/learnings-page/learnings-page.component";
import { FutuerPlansPageComponent } from "./slides/futuer-plans-page/futuer-plans-page.component";
import { CommonModule } from '@angular/common';
import { HobbysComponent } from "./slides/hobbys/hobbys.component";
import { EndPageComponent } from "./slides/end-page/end-page.component";
import { CalculatorComponent } from "./slides/old-projects/calculator/calculator.component";
import { ConwayComponent } from "./slides/old-projects/conway/conway.component";
import { loadingComponent } from "./slides/old-projects/loading/loading.component";
import { InvestmentcalculatorComponent } from "./slides/old-projects/investmentcalculator/investmentcalculator.component";
import { TaskmanagerComponent } from "./slides/old-projects/taskmanager/taskmanager.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    StartPageComponent,
    AgendaComponent,
    AboutMePageComponent,
    DoingsPageComponent,
    LearningsPageComponent,
    FutuerPlansPageComponent,
    HobbysComponent,
    EndPageComponent,
    CalculatorComponent,
    ConwayComponent,
    loadingComponent,
    loadingComponent,
    InvestmentcalculatorComponent,
    TaskmanagerComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'praesi';
  index = 0;
  totalPages = 16;
  observer!: IntersectionObserver;
  showSidebar = false; 
  

  ngAfterViewInit() {
    this.scrollToSection(this.index);
    this.observeSections();
  }

  get isDoingsVisible(): boolean {
    return this.index === 5; 
  }

  observeSections() {
    const pages = document.querySelectorAll('.page');

    const options = {
      root: null,
      threshold: 0.6,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newIndex = Array.from(pages).indexOf(entry.target);
          this.index = newIndex;

          
          this.showSidebar = newIndex >= 1;

          pages.forEach((page, idx) => {
            page.classList.toggle('active', idx === newIndex);
          });
        }
      });
    }, options);

    pages.forEach(page => this.observer.observe(page));
  }



  @HostListener('document:keydown', ['$event'])
  handleArrowKeys(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' ) {
      this.index = Math.min(this.index + 1, this.totalPages - 1);
    } else if (event.key === 'ArrowLeft' ) {
      this.index = Math.max(this.index - 1, 0);
    }
    this.scrollToSection(this.index);
  }

  private scrollToSection(index: number) {
    const pages = document.querySelectorAll('.page');
    const target = pages[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


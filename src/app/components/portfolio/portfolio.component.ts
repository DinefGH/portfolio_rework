import { Component, OnInit, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule
import { SectionService } from '../../services/section.service';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, ], 
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent  implements OnInit {



  constructor(
    private elementRef: ElementRef,
    private sectionService: SectionService
  ) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionService.setActiveSection('portfolio');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(this.elementRef.nativeElement.querySelector('#portfolio'));
  }

  isHovered = false;

  isHoveredVideo = false;

  isHoveredJoin = false;

  onHover(state: boolean) {
    this.isHovered = state;
  }


  onHoverVideo(state: boolean) {
    this.isHoveredVideo = state;
  }


  onHoverJoin(state: boolean) {
    this.isHoveredJoin = state;
  }
}

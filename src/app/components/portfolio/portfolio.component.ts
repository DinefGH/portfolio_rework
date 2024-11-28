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
export class PortfolioComponent implements OnInit {



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
      { threshold: 0.5 } 
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


  openLiveTestVideo(): void {
    window.open("https://videoflix.fabianduerr.com/", "_blank");
  }


  openGitHubVideo(): void {
    window.open("https://github.com/DinefGH/videoflix_angular", "_blank");
  }


  openGitHubVideoBackend(): void {
    window.open("https://github.com/DinefGH/videoflix_django", "_blank");
  }


  openLiveTestJoin(): void {
    window.open("https://join.fabianduerr.com/", "_blank");
  }


  openGitHubJoin(): void {
    window.open("https://github.com/DinefGH/join_angular", "_blank");
  }


  openGitHubJoinBackend(): void {
    window.open("https://github.com/DinefGH/join_angular", "_blank");
  }

  
  openLiveTestElPollo(): void {
    window.open("https://elpolloloco.fabianduerr.com/", "_blank");
  }


  openGitHubElPollo(): void {
    window.open("https://github.com/DinefGH/El-Pollo-Loco", "_blank");
  }
}

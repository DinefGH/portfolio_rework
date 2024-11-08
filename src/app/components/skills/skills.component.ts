import { Component, OnInit, ElementRef, AfterViewInit, Inject, PLATFORM_ID  }   from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; 
import { SectionService } from '../../services/section.service';
import { isPlatformBrowser } from '@angular/common';
import { NgFor, NgClass, NgStyle, NgIf } from '@angular/common';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, NgIf,],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})



export class SkillsComponent implements OnInit {

  frontendActive: boolean = true;
  backendActive: boolean = false;


  constructor(
    private elementRef: ElementRef,
    private sectionService: SectionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionService.setActiveSection('skills');
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(this.elementRef.nativeElement.querySelector('#skills'));
  }

  scrollToContact() {
    if (isPlatformBrowser(this.platformId)) {
    
      setTimeout(() => {
        const contactMeSection = document.getElementById('contactMe');
        if (contactMeSection) {
          contactMeSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn('contactMe section not found');
        }
      }, 0);
    }
  }



  changeToFrontend() {
    this.backendActive = false;
    this.frontendActive = true;
  }

  changeToBackend() {
    this.backendActive = true;
    this.frontendActive = false;
  }
}

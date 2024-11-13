import { Component, OnInit, ElementRef  } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionService } from '../../services/section.service';




@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private sectionService: SectionService
  ) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionService.setActiveSection('about');
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(this.elementRef.nativeElement.querySelector('#about'));
  }
}

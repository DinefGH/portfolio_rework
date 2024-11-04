import { Component, OnInit, ElementRef  } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule
import { SectionService } from '../../services/section.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private sectionService: SectionService
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
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(this.elementRef.nativeElement.querySelector('#skills'));
  }
}

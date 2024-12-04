import { Component, ElementRef, Renderer2, AfterViewInit, Inject, PLATFORM_ID  } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core'; 
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ButtonModule,TranslateModule, ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    const buttonLabel = this.el.nativeElement.querySelector('.p-button-label');
    
    if (buttonLabel) {
      this.smoothLoopingText(buttonLabel, 0.3); 
    }
  }

  smoothLoopingText(element: HTMLElement, stepSize: number): void {
    let position = 0;
    const textWidth = element.offsetWidth;
    const parentWidth = element.parentElement?.offsetWidth || 0;

    const resetPosition = parentWidth + 100;  

    const interval = setInterval(() => {
      
      position -= stepSize;  
      
      if (position < -textWidth -300) {
        position = resetPosition; 
      }

      
      if (position < +100 && position > -textWidth -100) {
        this.renderer.setStyle(element, 'visibility', 'visible'); 
      } else {
        setTimeout(() => {
          this.renderer.setStyle(element, 'visibility', 'hidden');
        }, 400);
      }

      
      this.renderer.setStyle(element, 'transform', `translateX(${position}px)`);

    }, 1); 
  }


  scrollToPortfolio() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn('Portfolio section not found');
        }
      }, 0);
    }
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

  openGitHub(): void {
    window.open("https://github.com/DinefGH/", "_blank");
  }



  openLinkedIn(): void {
    window.open("https://linkedin.com/in/fabian-dürr", "_blank");
  }


  openEmail(): void {
    window.location.href = "mailto:fabianduerr@protonmail.de";
  }

}

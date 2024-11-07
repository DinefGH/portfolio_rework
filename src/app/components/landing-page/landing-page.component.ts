import { Component, ElementRef, Renderer2, AfterViewInit, Inject, PLATFORM_ID  } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule
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
      this.smoothLoopingText(buttonLabel, 0.3);  // Pass the constant step size here (e.g., 2px per frame)
    }
  }

  smoothLoopingText(element: HTMLElement, stepSize: number): void {
    let position = 0;
    const textWidth = element.offsetWidth;
    const parentWidth = element.parentElement?.offsetWidth || 0;

    const resetPosition = parentWidth + 100;  // Reset point just beyond the right edge

    const interval = setInterval(() => {
      // Move the text to the left
      position -= stepSize;  // This ensures the movement is by a constant number of pixels
      
      // Hide the text when it's off the screen (to the left)
      if (position < -textWidth -300) {
        position = resetPosition; // Reset to right beyond the button
      }

      // If the text is off-screen, hide it; if visible, show it
      if (position < +100 && position > -textWidth -100) {
        this.renderer.setStyle(element, 'visibility', 'visible'); // Show text when it's in view
      } else {
        setTimeout(() => {
          this.renderer.setStyle(element, 'visibility', 'hidden');
        }, 400);
      }

      // Apply the transform to move the text
      this.renderer.setStyle(element, 'transform', `translateX(${position}px)`);

    }, 1); // 60 FPS (16ms per frame)
  }


  scrollToPortfolio() {
    if (isPlatformBrowser(this.platformId)) {
      // Use setTimeout to ensure the event loop has time to render other components
      setTimeout(() => {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
          console.log('scroll to Portfolio')
        } else {
          console.warn('Portfolio section not found');
        }
      }, 0);
    }
  }


  scrollToContact() {
    if (isPlatformBrowser(this.platformId)) {
      // Use setTimeout to ensure the event loop has time to render other components
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
}

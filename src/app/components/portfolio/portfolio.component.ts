import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, ], 
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
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

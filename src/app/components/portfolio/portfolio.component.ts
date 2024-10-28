import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule], 
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

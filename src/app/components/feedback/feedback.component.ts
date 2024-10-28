import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgFor, NgClass, NgStyle, NgIf } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle, NgIf],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class FeedbackComponent {
  feedbacks = [
    { content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita officiis similique doloribus laboriosam illo rem tempora minus,", author: "Max Mustermann" },
    { content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita officiis similique doloribus laboriosam illo rem tempora minus,", author: "Jane Doe" },
    { content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita officiis similique doloribus laboriosam illo rem tempora minus,", author: "John Smith" },
 
  ];

  animationIndex = 0;

  // Helper modulo function to handle negative numbers
  private mod(n: number, m: number): number {
    return ((n % m) + m) % m;
  }

  get currentIndex() {
    return this.mod(this.animationIndex, this.feedbacks.length);
  }

  get previousIndex() {
    return this.mod(this.currentIndex - 1, this.feedbacks.length);
  }

  get nextIndex() {
    return this.mod(this.currentIndex + 1, this.feedbacks.length);
  }

  nextFeedback() {
    this.animationIndex--;
  }

  previousFeedback() {
    this.animationIndex++;
  }

  setFeedback(index: number) {
    const currentIndex = this.currentIndex;
    if (index === currentIndex) return;
  
    // Determine the direction based on index difference
    const totalFeedbacks = this.feedbacks.length;
    let diff = index - currentIndex;
  
    // Adjust diff for the shortest path
    if (Math.abs(diff) > totalFeedbacks / 2) {
      diff = diff > 0 ? diff - totalFeedbacks : diff + totalFeedbacks;
    }
  
    if (diff > 0) {
      // Move forward: decrement animationIndex
      for (let i = 0; i < diff; i++) {
        this.animationIndex++;
      }
    } else {
      // Move backward: increment animationIndex
      for (let i = 0; i < -diff; i++) {
        this.animationIndex--;
      }
    }
  }
}

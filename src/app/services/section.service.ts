import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private activeSectionSource = new BehaviorSubject<string>('about'); // Default section
  activeSection$ = this.activeSectionSource.asObservable();

  setActiveSection(sectionId: string) {
    this.activeSectionSource.next(sectionId);
  }
}
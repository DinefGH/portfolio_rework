import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceThemeService {
  private currentTheme: string | null = null;
  
  // List of available themes for validation (optional but recommended)
  private availableThemes: string[] = [
    'lara-light-indigo',
    'lara-light-teal',
    'saga-blue',
    'saga-green',
    'saga-orange',
    'saga-purple',
    'vela-orange',
    'luna-green',
    'luna-pink',
  ];


  constructor() {
    this.loadTheme();
  }

  switchTheme(theme: string): void {
    if (!this.availableThemes.includes(theme)) {
      console.warn(`Theme "${theme}" is not available.`);
      return;
    }

    const existingLink = document.getElementById('theme-link') as HTMLLinkElement | null;

    if (existingLink) {
      existingLink.href = `assets/themes/${theme}.css`; 
    } else {
      const link = document.createElement('link');
      link.id = 'theme-link';
      link.rel = 'stylesheet';
      link.href = `assets/themes/${theme}.css`; 
      document.head.appendChild(link);
    }

    this.currentTheme = theme;
    this.saveTheme(theme);


  }

  private saveTheme(theme: string): void {
    localStorage.setItem('selectedTheme', theme);
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.switchTheme(savedTheme);
    }
  }

  getCurrentTheme(): string | null {
    return this.currentTheme;
  }
}
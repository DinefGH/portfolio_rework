import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceThemeService {
  private currentTheme: string | null = null;
  
  // List of available themes for validation (optional but recommended)
  private availableThemes: string[] = [
    'bootstrap4-light-blue',
    'bootstrap4-light-purple',
    'bootstrap4-dark-blue',
    'bootstrap4-dark-purple',
    'md-light-indigo',
    'md-light-deeppurple',
    'md-dark-indigo',
    'md-dark-deeppurple',
    'mdc-light-indigo',
    'mdc-light-deeppurple',
    'mdc-dark-indigo',
    'mdc-dark-deeppurple',
    'fluent-light',
    'lara-light-blue',
    'lara-light-indigo',
    'lara-light-purple',
    'lara-light-teal',
    'lara-dark-blue',
    'lara-dark-indigo',
    'lara-dark-purple',
    'lara-dark-teal',
    'soho-light',
    'soho-dark',
    'viva-light',
    'viva-dark',
    'mira',
    'nano',
    'saga-blue',
    'saga-green',
    'saga-orange',
    'saga-purple',
    'vela-blue',
    'vela-green',
    'vela-orange',
    'vela-purple',
    'arya-blue',
    'arya-green',
    'arya-orange',
    'arya-purple',
    'nova',
    'nova-alt',
    'nova-accent',
    'luna-amber',
    'luna-blue',
    'luna-green',
    'luna-pink',
    'rhea'
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

    console.log(`Theme switched to: ${theme}`);

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
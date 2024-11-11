import { Component } from '@angular/core';
import { ServiceThemeService } from '../../services/service-theme.service';
import { ReplaceDashPipe } from '../../pipes/replace-dash.pipe'; // Import the custom pipe
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // Import TranslateService
import { SectionService } from '../../services/section.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReplaceDashPipe, 
    FormsModule, 
    CommonModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  isActive: boolean = true;


  checked: boolean = false;

  availableThemes: string[] = [
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

  activeSection: string = '';
  selectedTheme: string = 'luna-green';
  dropdownOpen: boolean = false;
  dropdownVisible:  boolean = false;

  constructor(private serviceThemeService: ServiceThemeService,
    private translate: TranslateService,
    private sectionService: SectionService

  ) {}

  ngOnInit() {
    this.sectionService.activeSection$.subscribe((sectionId) => {
      this.activeSection = sectionId;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDropdownVisible() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectLanguage(lang: string) {
    this.dropdownVisible = false;
    this.translate.use(lang); 

    console.log('Selected language:', lang);
    this.dropdownVisible = true;
    console.log('visible:', this.dropdownVisible);
  }

  toggleClassClose() {
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }


  toggleClassOpen() {
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }


  changeTheme(theme: string) {
    this.selectedTheme = theme;
    this.serviceThemeService.switchTheme(theme);
    console.log('Current theme:', this.serviceThemeService.getCurrentTheme());
    this.dropdownOpen = false;
  }

  getThemeColor(theme: string): string {
    const themeColors: { [key: string]: string } = {
      'bootstrap4-light-blue': '#007bff',
      'bootstrap4-light-purple': '#883cae',
      'bootstrap4-dark-blue': '#8dd0ff',
      'bootstrap4-dark-purple': '#c298d8',
      'md-light-indigo': '#9FA8DA',
      'md-light-deeppurple': '#673AB7',
      'md-dark-indigo': '#9FA8DA',
      'md-dark-deeppurple': '#CE93D8',
      'mdc-light-indigo': '#3F51B5',
      'mdc-light-deeppurple': '#673AB7',
      'mdc-dark-indigo': '#9FA8DA',
      'mdc-dark-deeppurple': '#CE93D8',
      'fluent-light': '#0078d4',
      'lara-light-blue': '#3B82F6',
      'lara-light-indigo': '#6366F1',
      'lara-light-purple': '#8B5CF6',
      'lara-light-teal': '#14b8a6',
      'lara-dark-blue': '#60a5fa',
      'lara-dark-indigo': '#818cf8',
      'lara-dark-purple': '#a78bfa',
      'lara-dark-teal': '#2dd4bf',
      'soho-light': '#7254f3',
      'soho-dark': '#b19df7',
      'viva-light': '#5472d4',
      'viva-dark': '#9eade6',
      'mira': '#5e81ac',
      'nano': '#1174c0',
      'saga-blue': '#2196F3',
      'saga-green': '#4CAF50',
      'saga-orange': '#FFC107',
      'saga-purple': '#9C27B0',
      'vela-blue': '#64B5F6',
      'vela-green': '#81C784',
      'vela-orange': '#FFD54F',
      'vela-purple': '#BA68C8',
      'arya-blue': '#64B5F6',
      'arya-green': '#81C784',
      'arya-orange': '#FFD54F',
      'arya-purple': '#BA68C8',
      'nova': '#007ad9',
      'nova-alt': '#007ad9',
      'nova-accent': '#007ad9',
      'luna-amber': '#FFE082',
      'luna-blue': '#81D4FA',
      'luna-green': '#C5E1A5',
      'luna-pink': '#F48FB1',
      'rhea': '#7b95a3'
    };
    return themeColors[theme] || '#ffffff'; 
  }
}
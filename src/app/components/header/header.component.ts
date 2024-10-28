import { Component } from '@angular/core';
import { ServiceThemeService } from '../../services/service-theme.service';
import { ReplaceDashPipe } from '../../pipes/replace-dash.pipe'; // Import the custom pipe
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReplaceDashPipe, 
    FormsModule, 
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {





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

 
  selectedTheme: string = 'luna-green';
  dropdownOpen: boolean = false;
  dropdownVisible:  boolean = false;

  constructor(private serviceThemeService: ServiceThemeService) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDropdownVisible() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectLanguage(lang: string) {
    this.dropdownVisible = false;
    console.log('Selected language:', lang);
    
  }



  changeTheme(theme: string) {
    this.selectedTheme = theme;
    this.serviceThemeService.switchTheme(theme);
    console.log('Current theme:', this.serviceThemeService.getCurrentTheme());
    this.dropdownOpen = false;  // Close dropdown after selecting a theme
  }

  getThemeColor(theme: string): string {
    const themeColors: { [key: string]: string } = {
      'bootstrap4-light-blue': '#B3DDF2',
      'bootstrap4-light-purple': '#D1C4E9',
      'bootstrap4-dark-blue': '#1565C0',
      'bootstrap4-dark-purple': '#673AB7',
      'md-light-indigo': '#7986CB',
      'md-light-deeppurple': '#7E57C2',
      'md-dark-indigo': '#3F51B5',
      'md-dark-deeppurple': '#512DA8',
      'mdc-light-indigo': '#7986CB',
      'mdc-light-deeppurple': '#7E57C2',
      'mdc-dark-indigo': '#3F51B5',
      'mdc-dark-deeppurple': '#512DA8',
      'fluent-light': '#8AB4F8',
      'lara-light-blue': '#42A5F5',
      'lara-light-indigo': '#5C6BC0',
      'lara-light-purple': '#AB47BC',
      'lara-light-teal': '#26A69A',
      'lara-dark-blue': '#1E88E5',
      'lara-dark-indigo': '#3949AB',
      'lara-dark-purple': '#8E24AA',
      'lara-dark-teal': '#00796B',
      'soho-light': '#8BC34A',
      'soho-dark': '#388E3C',
      'viva-light': '#FF7043',
      'viva-dark': '#E64A19',
      'mira': '#EF5350',
      'nano': '#66BB6A',
      'saga-blue': '#1E88E5',
      'saga-green': '#43A047',
      'saga-orange': '#FB8C00',
      'saga-purple': '#8E24AA',
      'vela-blue': '#3949AB',
      'vela-green': '#00796B',
      'vela-orange': '#FB8C00',
      'vela-purple': '#8E24AA',
      'arya-blue': '#1E88E5',
      'arya-green': '#43A047',
      'arya-orange': '#FB8C00',
      'arya-purple': '#8E24AA',
      'nova': '#FFEB3B',
      'nova-alt': '#FFEE58',
      'nova-accent': '#FFEB3B',
      'luna-amber': '#FFC107',
      'luna-blue': '#2196F3',
      'luna-green': '#4CAF50',
      'luna-pink': '#E91E63',
      'rhea': '#795548'
    };
    return themeColors[theme] || '#ffffff'; // Default color if theme is not found
  }
}
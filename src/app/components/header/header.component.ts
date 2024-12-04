import { Component } from '@angular/core';
import { ServiceThemeService } from '../../services/service-theme.service';
import { ReplaceDashPipe } from '../../pipes/replace-dash.pipe'; 
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { SectionService } from '../../services/section.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
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


  activeSection: string = '';
  selectedTheme: string = 'vela-orange';
  dropdownOpen: boolean = false;
  dropdownOpenHover: boolean = false;
  dropdownOpenHoverLanguage: boolean = false;
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
    this.dropdownVisible = true;
  }


  toggleClassClose() {
    this.isActive = !this.isActive;
  }


  toggleClassOpen() {
    this.isActive = !this.isActive;
  }


  changeTheme(theme: string) {
    this.selectedTheme = theme;
    this.serviceThemeService.switchTheme(theme);
    this.dropdownOpen = false;
  }


  getThemeColor(theme: string): string {
    const themeColors: { [key: string]: string } = {
      'lara-light-indigo': '#6366F1',
      'lara-light-teal': '#14b8a6',
      'saga-blue': '#2196F3',
      'saga-green': '#4CAF50',
      'saga-orange': '#FFC107',
      'saga-purple': '#9C27B0',
      'vela-orange': '#FFD54F',
      'luna-green': '#C5E1A5',
      'luna-pink': '#F48FB1',
    };
    return themeColors[theme] || '#ffffff'; 
  }


  openFabian(): void  {
    window.open("https://fabianduerr.com", "_blank");
  }


close() {
  this.isActive = true;

}
}

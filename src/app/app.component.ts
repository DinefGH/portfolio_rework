import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { MainComponent } from "./components/main/main.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component"; // Correct relative path


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, InputTextModule, ButtonModule, HeaderComponent, LandingPageComponent, MainComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, FeedbackComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-frontend';
  value: string | undefined;
}

import { Component } from '@angular/core';
import {TranslateModule } from '@ngx-translate/core'; 
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  constructor(
    private router: Router,
  ) {}


  openGitHub(): void {
    window.open("https://github.com/DinefGH/", "_blank");
  }


  openLinkedIn(): void {
    window.open("https://linkedin.com/in/fabian-dürr", "_blank");
  }


  openEmail(): void {
    window.location.href = "mailto:fabianduerr@protonmail.de";
  }


  openImprint(): void {
    window.open('/imprint', '_blank');
  }


  openFabian(): void  {
    window.open("https://portfolio.fabianduerr.com", "_blank");
  }


}

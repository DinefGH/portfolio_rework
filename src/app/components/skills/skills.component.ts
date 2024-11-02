import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}

import { Component } from '@angular/core';
import {TranslateModule } from '@ngx-translate/core'; // Import TranslateModule

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

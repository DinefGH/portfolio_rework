import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgFor, NgClass, NgStyle, NgIf } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';



@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CheckboxModule, InputTextModule, FloatLabelModule, NgIf, InputTextareaModule  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  checkedPrivacy: boolean = false;
  valueName: string | undefined;
  valueEmail: string | undefined;
  valueMessage: string | undefined;
  nameEntered = true
}

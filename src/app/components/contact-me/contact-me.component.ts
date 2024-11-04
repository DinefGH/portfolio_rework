import { Component, OnInit, ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgFor, NgClass, NgStyle, NgIf } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TranslateModule } from '@ngx-translate/core'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SectionService } from '../../services/section.service';




@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CheckboxModule, InputTextModule, FloatLabelModule, NgIf, InputTextareaModule, TranslateModule,
    HttpClientModule,  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  checkedPrivacy: boolean = false;
  valueName: string = '';
  valueEmail: string = '';
  valueMessage: string = '';
  nameEntered: boolean = true;
  emailEntered: boolean = true;
  messageEntered: boolean = true;


  constructor(private http: HttpClient,
    private elementRef: ElementRef,
    private sectionService: SectionService
  ) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionService.setActiveSection('contactMe');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(this.elementRef.nativeElement.querySelector('#contactMe'));
  }


  sendMail(contactForm: NgForm) {
    if (contactForm.invalid || !this.checkedPrivacy) {
      return;
    }
  
    const formData = new FormData();
    formData.append('name', this.valueName);
    formData.append('email', this.valueEmail);
    formData.append('message', this.valueMessage);
  
    this.http
      .post('https://fabianduerr.com/send_mail_portfolio/send_mail.php', formData, { responseType: 'text' })
      .subscribe(
        (response) => {
          alert('Email sent successfully!');
          contactForm.resetForm();
          this.checkedPrivacy = false; 
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to send email: ' + error.error);
        }
      );
  }
}
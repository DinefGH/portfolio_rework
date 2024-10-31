import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AppTranslateService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang?.match(/en|de/) ? browserLang : 'en';
    this.translate.use(langToUse);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
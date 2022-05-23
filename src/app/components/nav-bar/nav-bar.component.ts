import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  langForm: FormGroup | undefined;
  locale = [
    { id: 'en', name: 'English' },
    { id: 'de', name: 'German' },
    { id: 'es', name: 'Spanish' },
  ];

  constructor(public translateServie: TranslateService, public languageService: LanguageService) {
    this.translateServie.addLangs(['en', 'es', 'de']);
    this.translateServie.use('en');
    this.translateServie.setDefaultLang('en');
    this.languageService.currentLanguage.subscribe(lang => {
      this.translateServie.use(lang);
    })
  }

  ngOnInit(): void {
    this.initLangForm();
  }

  initLangForm() {
    this.langForm = this.langForm;
  }

  changeLanguage(lang: any):void {
    const selectedLanguage = lang?.srcElement?._value[0];
    if(selectedLanguage){
      this.languageService.changeSelectedLangage(selectedLanguage);
      this.translateServie.use(selectedLanguage);
    }
  }
  /* set language(lang: string) {
    this.translateServie.use(lang);
  } */

  /* get language(): string {
    return this.translateServie.currentLang;
  } */
}

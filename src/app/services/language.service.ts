import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LanguageService {
  private browserLanguage = navigator.language.substring(0, 2);
  private selectedLanguage = new BehaviorSubject(this.browserLanguage);
  public currentLanguage = this.selectedLanguage.asObservable();
  constructor() {}

  changeSelectedLangage(lang: string) {
    this.selectedLanguage.next(lang);
  }
}

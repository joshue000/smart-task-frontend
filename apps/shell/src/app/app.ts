import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService } from './i18n.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public i18n: I18nService) {}

  toggleLanguage() {
    const newLang = this.i18n.currentLang() === 'en' ? 'es' : 'en';
    this.i18n.switchLanguage(newLang);
  }
}

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translations = signal<any>({});
  currentLang = signal<string>('en');

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  loadTranslations(lang: string) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translations.set(data);
        this.currentLang.set(lang);
      }
    });
  }

  t(key: string): string {
    const keys = key.split('.');
    let value = this.translations();
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }

  switchLanguage(lang: string) {
    this.loadTranslations(lang);
  }
}

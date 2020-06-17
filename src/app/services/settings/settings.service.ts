import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    urlTheme: 'assets/css/colors/default.css',
    theme: 'default'
  };
  constructor(@Inject(DOCUMENT) private doc) {
    this.getSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  getSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.setTheme(this.settings.theme);
    } else {
      this.setTheme(this.settings.theme);
    }
  }

  setTheme(colorTheme: string) {
    const url = `assets/css/colors/${colorTheme}.css`;
    this.doc.getElementById('theme').setAttribute('href', url);
    this.settings.theme = colorTheme;
    this.settings.urlTheme = url;
    this.saveSettings();
  }
}

interface Settings {
  urlTheme: string;
  theme: string;
}

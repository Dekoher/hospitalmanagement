import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private doc, public settings: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  changeThemeColor(colorTheme: string, link: any) {
    this.checkColorTheme(link);
    this.settings.setTheme(colorTheme);
  }

  checkColorTheme(link: any) {
    const selectorGroup = this.doc.getElementsByClassName('selector');
    for (const ref of selectorGroup) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  setCheck() {
    const selectorGroup = this.doc.getElementsByClassName('selector');
    const theme = this.settings.settings.theme;
    for (const ref of selectorGroup) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}

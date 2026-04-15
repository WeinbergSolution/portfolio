import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  constructor(public translate: TranslateService) {}
  classToggledLanguage = false;

  useLanguage(language: string): void {
    this.translate.use(language);
    this.classToggledLanguage = !this.classToggledLanguage;
  }
}

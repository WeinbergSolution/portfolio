import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-burger',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './burger.html',
  styleUrls: ['./burger.scss'],
})
export class Burger {
  constructor(public translate: TranslateService) {}

  classToggled = false;
  classToggledLanguage = false;

  toggleField() {
    this.classToggled = !this.classToggled;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.classToggledLanguage = !this.classToggledLanguage;
  }
}

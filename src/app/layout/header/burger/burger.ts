import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
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
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
  @Input() isBurgerOpen: boolean = false;
  @Output() burgerToggle: EventEmitter<void> = new EventEmitter<void>();

  toggleBurger(): void {
    this.burgerToggle.emit();
  }
  closeBurger(): void {
    this.isBurgerOpen = false;
  }
}

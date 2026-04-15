import { Component, inject } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, Footer, Header],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss'],
})
export class Imprint {
  private translate = inject(TranslateService);
}

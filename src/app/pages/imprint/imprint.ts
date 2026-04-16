import { Component, inject } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss'],
})
export class Imprint {
  private translate = inject(TranslateService);
}

import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-friends',
  imports: [TranslatePipe],
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
})
export class Friends {
  private translate = inject(TranslateService);
}

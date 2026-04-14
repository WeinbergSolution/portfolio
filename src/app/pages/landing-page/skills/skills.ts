import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class Skills {
  private translate = inject(TranslateService);
}

import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Projects } from '../projects';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  private translate = inject(TranslateService);

  classToggled = false;

  toggleField() {
    this.classToggled = !this.classToggled;
  }
}

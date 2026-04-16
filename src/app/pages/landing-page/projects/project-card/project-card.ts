import { Component, inject, input } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

export interface Project {
  name: string;
  description: string;
  status: string;
  skills: string[];
  link: string;
  linkProject: string;
  logo: string;
}

@Component({
  selector: 'app-project-card',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  private translate = inject(TranslateService);

  icon = {
    HTML: 'icon/html_project_thumbnail.png',
    CSS: 'icon/css_project_thumbnail.png',
    JavaScript: 'icon/Javascript_thumbnail_projects.png',
    Typescript: 'icon/Typescript_project_thumbnail.png',
    Angular: 'icon/Angular_project_thumbnail.png',
    Firebase: 'icon/Firebase_project_thumbnail.png',
  };

  loadIMG(skill: string) {
    switch (skill) {
      case 'HTML':
        return this.icon.HTML;

      case 'CSS':
        return this.icon.CSS;
      case 'JavaScript':
        return this.icon.JavaScript;
      case 'TypeScript':
        return this.icon.Typescript;

      case 'Angular':
        return this.icon.Angular;

      case 'Firebase':
        return this.icon.Firebase;

      default:
        return '';
    }
  }
  classToggled = false;
  toggleField() {
    this.classToggled = !this.classToggled;
  }

  project = input.required<Project>();
  index = input.required();
}

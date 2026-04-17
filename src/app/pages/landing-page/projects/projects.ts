import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectCard, Project } from './project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe, ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects = [
    // {
    //   name: 'Sakura',
    //   description: 'future.sakura.descriptionText',
    //   status: 'done',
    //   skills: ['HTML', 'CSS'],
    //   link: '#',
    //   linkProject: '#',
    // },

    // {
    //   name: 'Kochwelt',
    //   description: 'future.kochwelt.descriptionText',
    //   status: 'done',
    //   skills: ['HTML', 'CSS'],
    //   link: '#',
    //   linkProject: '#',
    // },
    {
      name: 'Fotogram',
      description: 'future.fotogram.descriptionText',
      status: 'done',
      skills: ['HTML', 'CSS'],
      link: 'https://github.com/WeinbergSolution/fotogram',
      linkProject: 'https://pascalweinberg.developerakademie.net/fotogram/index.html',
      logo: 'img/join.jpg',
    },
    // {
    //   name: 'Bookstore',
    //   description: 'future.bookstore.descriptionText',
    //   status: 'done',
    //   skills: ['HTML', 'CSS', 'JavaScript'],
    //   link: 'https://github.com/WeinbergSolution/bookstore',
    //   linkProject: '#',
    // },
    {
      name: 'Betsll-App',
      description: 'future.bestell-app.descriptionText',
      status: 'done',
      skills: ['HTML', 'CSS'],
      link: 'https://github.com/WeinbergSolution/bestellApp',
      linkProject: 'https://pascalweinberg.developerakademie.net/bestellApp/index.html',
      logo: 'img/1.jpg',
    },
    // {
    //   name: 'Pokedex',
    //   description: 'future.pokedex.descriptionText',
    //   status: 'done',
    //   skills: ['HTML', 'CSS', 'JavaScript'],
    //   link: '#',
    //   linkProject: '#',
    // },
    {
      name: 'Pollo Loco',
      description: 'future.polloloco.descriptionText',
      status: 'done',
      skills: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/WeinbergSolution/ElPolloLoco',
      linkProject: 'https://pascalweinberg.developerakademie.net/ElPolloLoco/index.html',
      logo: 'img/el_Pollo_Loco.jpg',
    },
    // {
    //   name: 'Portfolio',
    //   description: 'future.portfolio.descriptionText',
    //   status: 'in progress',
    //   skills: ['HTML', 'CSS', 'TypeScript', 'Angular'],
    //   link: 'https://github.com/WeinbergSolution/portfolio',
    //   linkProject: '#',
    // },
    // {
    //   name: 'Join',
    //   description: 'future.join.descriptionText',
    //   descriptionEn: 'Hello',
    //   status: 'upcoming',
    //   skills: ['Angular', 'HTML', 'CSS', 'Firebase'],
    //   link: 'https://pascalweinberg.developerakademie.net/fotogram/index.html',
    //   linkProject: 'https://github.com/WeinbergSolution/fotogram',
    //   logo: 'img/join.jpg',
    // },
  ];

  currentProject = <Project>{};
  currentIndex = 0;

  updateProject(index: number) {
    this.currentProject = this.projects[index];
    this.currentIndex = index;
  }

  classToggled = false;
  toggleField() {
    this.classToggled = !this.classToggled;
  }
}

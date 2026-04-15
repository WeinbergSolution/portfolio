import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects = [
    {
      name: 'Sakura',
      description: 'Eine Ramen-Resturant Website',
      status: 'done',
      skills: ['HTML', 'CSS'],
    },

    {
      name: 'Kochwelt',
      description: 'Eine Rezepte-Website, welche im Team umgesetzt wurde',
      status: 'done',
      skills: ['HTML', 'CSS'],
    },
    {
      name: 'Fotogram',
      description: 'Bildergalerie mit der Möglichkeit, durch Bilder zu sliden',
      status: 'done',
      skills: ['HTML', 'CSS'],
    },
    {
      name: 'Bookstore',
      description: 'Büchershop erstellt mit Objecten Ramen-Resturant Website',
      status: 'done',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Betsll-App',
      description: 'Klon von Lieferando',
      status: 'done',
      skills: ['HTML', 'CSS'],
    },
    {
      name: 'Pokedex',
      description: 'Pokedex erstellt mit einer externen API',
      status: 'done',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Pollo Loco',
      description: '2D Jump and Run Spiel mit Objektorierntierung',
      status: 'done',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Portfolio',
      description: 'Ein Portfolio mit meinen Projekten und Skills',
      status: 'in progress',
      skills: ['HTML', 'SCSS', 'Typescript', 'Angular '],
    },
    {
      name: 'Join',
      description: 'Kanban Board mit Backend in Gruppenarbeit',
      status: 'upcoming',
      skills: ['Angular', 'HTML', 'CSS', 'Firebase'],
    },
  ];
}

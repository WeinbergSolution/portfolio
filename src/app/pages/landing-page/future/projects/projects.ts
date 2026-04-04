import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    { name: 'Sakura', description: 'Eine Ramen-Resturant Website', status: 'done' },
    {
      name: 'Kochwelt',
      description: 'Eine Rezepte-Website, welche im Team umgesetzt wurde',
      status: 'done',
    },
    {
      name: 'Fotogram',
      description: 'Bildergalerie mit der Möglichkeit, durch Bilder zu sliden',
      status: 'done',
    },
    {
      name: 'Bookstore',
      description: 'Büchershop erstellt mit Objecten Ramen-Resturant Website',
      status: 'done',
    },
    {
      name: 'Betsll-App',
      description: 'Klon von Lieferando',
      status: 'done',
    },
    {
      name: 'Pokedex',
      description: 'Pokedex erstellt mit einer externen API',
      status: 'done',
    },
    {
      name: 'Pollo Loco',
      description: '2D Jump and Run Spiel mit Objektorierntierung',
      status: 'done',
    },
    {
      name: 'Portfolio',
      description: 'Ein Portfolio mit meinen Projekten und Skills',
      status: 'in progress',
    },
    { name: 'Join', description: 'Kanban Board mit Backend in Gruppenarbeit', status: 'upcoming' },
  ];
}

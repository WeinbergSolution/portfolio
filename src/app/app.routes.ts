import { Routes } from '@angular/router';
import { Error } from './pages/error/error';
import { LandingPage } from './pages/landing-page/landing-page';
import { Imprint } from './pages/imprint/imprint';

import { ProjectCard } from './pages/landing-page/projects/project-card/project-card';

export const routes: Routes = [
  { path: 'imprint', component: Imprint },
  { path: 'projectCard', component: ProjectCard },
  { path: '', pathMatch: 'full', component: LandingPage },
  { path: '**', component: Error },
];

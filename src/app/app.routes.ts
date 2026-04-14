import { Routes } from '@angular/router';
import { Error } from './pages/error/error';
import { LandingPage } from './pages/landing-page/landing-page';
import { Imprint } from './pages/imprint/imprint';

export const routes: Routes = [
  { path: 'imprint', component: Imprint },
  { path: '', pathMatch: 'full', component: LandingPage },
  { path: '**', component: Error },
];

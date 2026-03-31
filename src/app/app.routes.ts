import { Routes } from '@angular/router';
import { Error } from './shared/components/error/error';
import { LandingPage } from './shared/components/landing-page/landing-page';
import { Imprint } from './shared/components/imprint/imprint';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPage },
  { path: 'imprint', component: Imprint },
  { path: '**', component: Error },
];

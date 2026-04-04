import { Routes } from '@angular/router';
import { Error } from './pages/error/error';
import { LandingPage } from './pages/landing-page/landing-page';
import { Imprint } from './pages/imprint/imprint';
import { About } from './pages/landing-page/about/about';
import { Skills } from './pages/landing-page/skills/skills';
import { Future } from './pages/landing-page/future/future';
import { Contact } from './pages/landing-page/contact/contact';
import { Friends } from './pages/landing-page/friends/friends';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPage },
  { path: 'imprint', component: Imprint },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'future', component: Future },
  { path: 'friendship', component: Friends },
  { path: 'contact', component: Contact },
  { path: '**', component: Error },
];

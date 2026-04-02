import { Routes } from '@angular/router';
import { Error } from './shared/components/error/error';
import { LandingPage } from './shared/components/landing-page/landing-page';
import { Imprint } from './shared/components/imprint/imprint';
import { About } from './shared/components/landing-page/about/about';
import { Skills } from './shared/components/landing-page/skills/skills';
import { Future } from './shared/components/landing-page/future/future';
import { Contact } from './shared/components/landing-page/contact/contact';
import { Friends } from './shared/components/landing-page/friends/friends';

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

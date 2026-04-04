import { Component } from '@angular/core';
import { About } from './about/about';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Future } from './future/future';
import { Friends } from './friends/friends';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, About, Skills, Future, Friends, Contact],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss'],
})
export class LandingPage {}

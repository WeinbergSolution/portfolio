import { Component } from '@angular/core';
import { About } from './about/about';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Friends } from './friends/friends';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, About, Skills, Projects, Friends, Contact],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss'],
})
export class LandingPage {}

import { Component } from '@angular/core';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-future',
  imports: [Projects],
  templateUrl: './future.html',
  styleUrls: ['./future.scss'],
})
export class Future {}

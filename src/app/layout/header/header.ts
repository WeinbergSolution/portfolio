import { Component } from '@angular/core';

import { Burger } from './burger/burger';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Navbar, Burger],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {}

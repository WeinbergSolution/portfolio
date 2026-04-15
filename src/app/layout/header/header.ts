import { Component } from '@angular/core';

import { Burger } from './burger/burger';
import { Navbar } from './navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Navbar, Burger],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {}

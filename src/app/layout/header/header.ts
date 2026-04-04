import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Burger } from './burger/burger';

@Component({
  selector: 'app-header',
  imports: [Burger],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {}

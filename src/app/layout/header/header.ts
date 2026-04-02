import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {}

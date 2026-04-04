import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [UpperCasePipe],
  templateUrl: './error.html',
  styleUrls: ['./error.scss'],
})
export class Error {}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger.html',
  styleUrl: './burger.scss',
})
export class BurgerButtonComponent {
  @Input() isOpen = false;
  @Input() color = '#000';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() ariaLabel = 'Toggle navigation menu';
  @Input() text?: string;

  @Output() toggle = new EventEmitter<boolean>();

  onClick() {
    this.toggle.emit(!this.isOpen);
  }
}

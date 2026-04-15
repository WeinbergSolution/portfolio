import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; // [cite: 5]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, ReactiveFormsModule, CommonModule], //
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private translateService = inject(TranslateService);
  private fb = inject(FormBuilder); //

  // Formular-Definition
  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
    privacy: [false, [Validators.requiredTrue]],
  });

  // Getter für die Validierung im HTML [cite: 8, 9]
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get privacy() {
    return this.contactForm.get('privacy');
  }

  submit() {
    this.contactForm.markAllAsTouched(); // [cite: 7]
    if (this.contactForm.invalid) {
      console.log('Form ist invalid'); // [cite: 7]
      return;
    }
    console.log(this.contactForm.value); // [cite: 8]
  }
}

import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly dataService = inject(PortfolioDataService);

  readonly contactInfo = this.dataService.getContactInfo();
  readonly socialLinks = this.dataService.getSocialLinks();

  readonly isSubmitting = signal<boolean>(false);
  readonly isSubmitted = signal<boolean>(false);
  readonly copiedEmail = signal<boolean>(false);

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get subjectControl() {
    return this.contactForm.get('subject');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.contactInfo.email).then(() => {
        this.copiedEmail.set(true);
        setTimeout(() => this.copiedEmail.set(false), 2500);
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    // Simulate clean dispatch (ready to connect to backend endpoint or email service)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.contactForm.reset();
    }, 700);
  }

  resetForm(): void {
    this.isSubmitted.set(false);
    this.contactForm.reset();
  }
}

import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-floating-social',
  standalone: true,
  templateUrl: './floating-social.component.html',
  styleUrl: './floating-social.component.scss',
})
export class FloatingSocialComponent {
  protected readonly dataService = inject(PortfolioDataService);
  readonly contactInfo = this.dataService.getContactInfo();

  readonly copied = signal<boolean>(false);

  copyEmail(event: MouseEvent): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.contactInfo.email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2200);
      });
    }
  }
}

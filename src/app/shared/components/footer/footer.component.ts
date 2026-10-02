import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly dataService = inject(PortfolioDataService);
  protected readonly currentYear = new Date().getFullYear();
}

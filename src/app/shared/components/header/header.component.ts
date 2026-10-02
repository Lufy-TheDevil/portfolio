import {
  Component,
  effect,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly dataService = inject(PortfolioDataService);

  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly copiedEmail = signal<boolean>(false);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  constructor() {
    // Automatically close sidebar and unlock scrolling on route navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });

    // Synchronize body scroll locking with sidebar open state
    effect(() => {
      const open = this.isMobileMenuOpen();
      if (isPlatformBrowser(this.platformId)) {
        if (open) {
          document.body.classList.add('menu-open');
          document.documentElement.classList.add('menu-open');
        } else {
          document.body.classList.remove('menu-open');
          document.documentElement.classList.remove('menu-open');
        }
      }
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(this.dataService.getContactInfo().email)
        .then(() => {
          this.copiedEmail.set(true);
          setTimeout(() => this.copiedEmail.set(false), 2200);
        });
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    }
  }
}

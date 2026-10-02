import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Application is configured for Dark Theme only as preferred.
   */
  readonly isDark = signal<boolean>(true);

  constructor() {
    this.applyDarkTheme();
  }

  private applyDarkTheme(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
}

import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
})
export class ScrollTopComponent {
  readonly isVisible = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isVisible.set(scrollPosition > 250);
    }
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}

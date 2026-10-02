import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { FloatingSocialComponent } from './shared/components/floating-social/floating-social.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FloatingSocialComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

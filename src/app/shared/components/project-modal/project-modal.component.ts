import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Project } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}

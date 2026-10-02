import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { DomainItem, Project } from '../../core/models/portfolio.model';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly dataService = inject(PortfolioDataService);

  readonly domains = this.dataService.getDomainItems();
  readonly selectedDomain = signal<DomainItem>(this.domains[0]);
  readonly selectedProject = signal<Project | null>(null);

  get selectedDomainIndex(): number {
    return this.domains.findIndex((d) => d.id === this.selectedDomain().id) + 1;
  }

  selectDomain(item: DomainItem): void {
    this.selectedDomain.set(item);
  }

  nextDomain(): void {
    const currentIndex = this.domains.findIndex((d) => d.id === this.selectedDomain().id);
    const nextIndex = (currentIndex + 1) % this.domains.length;
    this.selectedDomain.set(this.domains[nextIndex]);
  }

  prevDomain(): void {
    const currentIndex = this.domains.findIndex((d) => d.id === this.selectedDomain().id);
    const prevIndex = (currentIndex - 1 + this.domains.length) % this.domains.length;
    this.selectedDomain.set(this.domains[prevIndex]);
  }

  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
  }
}

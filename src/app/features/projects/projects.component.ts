import { Component, computed, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Project } from '../../core/models/portfolio.model';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly dataService = inject(PortfolioDataService);

  readonly allProjects = this.dataService.getProjects();
  readonly selectedFilter = signal<string>('All');
  readonly selectedProject = signal<Project | null>(null);

  readonly filterOptions = [
    'All',
    'ASP.NET MVC',
    'Entity Framework',
    'SQL Server',
    'C#',
  ];

  readonly filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter((p) =>
      p.technologies.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      ) || p.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  setFilter(filter: string): void {
    this.selectedFilter.set(filter);
  }

  openDetails(project: Project): void {
    this.selectedProject.set(project);
  }

  closeDetails(): void {
    this.selectedProject.set(null);
  }
}

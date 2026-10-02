import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
  });

  it('should create the projects component', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should filter projects by technology', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;

    expect(component.filteredProjects().length).toBeGreaterThanOrEqual(3);

    component.setFilter('Entity Framework');
    const filtered = component.filteredProjects();
    expect(filtered.length).toBeGreaterThanOrEqual(1);
    expect(filtered[0].title).toBe('Fleet Management System');
  });

  it('should open and close project detail modal', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    const project = component.allProjects[0];

    expect(component.selectedProject()).toBeNull();
    component.openDetails(project);
    expect(component.selectedProject()).toBe(project);

    component.closeDetails();
    expect(component.selectedProject()).toBeNull();
  });
});

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Aklesh Ramola | Software Developer — ERP & Backend Systems',
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
    title: 'Experience | Aklesh Ramola — ERP Systems & Enterprise Applications',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    title: 'Projects | Aklesh Ramola — Backend & Business Applications',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Contact | Aklesh Ramola — Software Developer',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

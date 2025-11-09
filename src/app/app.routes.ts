import { Routes } from '@angular/router';
import { icsAccessGuard } from './guards/ics-access.guard';

export const routes: Routes = [
  {
    path: 'events',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./events/events.page').then((m) => m.FolderPage),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'ics',
    loadComponent: () => import('./ics/ics.page').then( m => m.IcsPage),
    canActivate: [icsAccessGuard],
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'events',
    pathMatch: 'full',
  },
];

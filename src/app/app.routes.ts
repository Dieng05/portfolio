import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'projets-details/:idProjet',
    loadComponent: () =>
      import('./components/projet-details/projet-details')
        .then(m => m.ProjetDetails)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

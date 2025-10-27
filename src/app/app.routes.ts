import { Routes } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: About,
    data: { title: 'Accueil' }
  },
  {
    path: 'a-propos',
    component: About,
    data: { title: 'À-propos' }
  },
  {
    path: 'experiences',
    component: Experience,
    data: { title: 'Experiences' }
  },
  {
    path: 'projets',
    component: About,
    data: { title: 'Projets' }
  },
  {
    path: 'formations',
    component: About,
    data: { title: 'Formations' }
  },
  {
    path: 'competences',
    component: About,
    data: { title: 'Competences' }
  },
  {
    path: 'contact',
    component: About,
    data: { title: 'Contact' }
  }
];

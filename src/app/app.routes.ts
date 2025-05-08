import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Igreja Presbiteriana de Macaé',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    title: 'Login - Igreja Presbiteriana de Macaé',
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/sobre/sobre.component').then((m) => m.SobreComponent),
    title: 'Sobre - Igreja Presbiteriana de Macaé',
  },
  {
    path: 'pastor',
    loadComponent: () =>
      import('./pages/pastor/pastor.component').then((m) => m.PastorComponent),
    title: 'Pastor - Igreja Presbiteriana de Macaé',
  },
  {
    path: 'escalas',
    loadComponent: () =>
      import('./pages/escalas/escalas.component').then(
        (m) => m.EscalasComponent
      ),
    title: 'Escalas - Igreja Presbiteriana de Macaé',
  },
  {
    path: 'lutero',
    loadComponent: () =>
      import('./pages/lutero/lutero.component').then((m) => m.LuteroComponent),
    title: 'Martinho Lutero - Igreja Presbiteriana de Macaé',
  },
  {
    path: 'calvino',
    loadComponent: () =>
      import('./pages/calvino/calvino.component').then(
        (m) => m.CalvinoComponent
      ),
    title: 'João Calvino - Igreja Presbiteriana de Macaé',
  },
  {
    path: 'ashbel',
    loadComponent: () =>
      import('./pages/ashbel/ashbel.component').then((m) => m.AshbelComponent),
    title: 'Ashbel Green Simonton - Igreja Presbiteriana de Macaé',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

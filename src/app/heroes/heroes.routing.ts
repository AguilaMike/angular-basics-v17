import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/list/list.component').then(m => m.ListComponent) },
  { path: 'hero', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
];

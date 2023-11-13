import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'counter' },
  { path: 'counter', loadChildren: () => import('./counter/counter.routing').then(m => m.routes) },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.routing').then(m => m.routes) },
  { path: 'dbz', loadChildren: () => import('./dbz/dbz.routing').then(m => m.routes) },
];

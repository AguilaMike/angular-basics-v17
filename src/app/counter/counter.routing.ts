import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

export const components = [
  CounterComponent,
];

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/counter/counter.component').then(m => m.CounterComponent) },
];

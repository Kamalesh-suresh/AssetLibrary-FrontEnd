import { Routes } from '@angular/router';
import { authGuard } from './services/authGuard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./container/login/login').then((m) => m.Login),
  },
  {
    path: 'signup',
    loadComponent: () => import('./container/signup/signup').then((m) => m.Signup),
  },
  {
    path: 'addAsset',
    loadComponent: () => import('./container/add-asset/add-asset').then((m) => m.AddAsset),
    canActivate: [authGuard],
  },
  {
    path: 'editAsset/:id',
    loadComponent: () => import('./container/add-asset/add-asset').then((m) => m.AddAsset),
    canActivate: [authGuard],
  },
  {
    path: '',
    loadComponent: () => import('./container/home/home').then((m) => m.Home),
  },
];

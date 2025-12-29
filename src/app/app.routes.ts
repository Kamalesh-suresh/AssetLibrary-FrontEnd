import { Routes } from '@angular/router';
import { Login } from './container/login/login';
import { Signup } from './container/signup/signup';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: Signup,
  },
];

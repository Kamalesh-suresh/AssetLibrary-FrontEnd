import { Routes } from '@angular/router';
import { Login } from './container/login/login';
import { Signup } from './container/signup/signup';
import { Home } from './container/home/home';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: Signup,
  },
  { path: '', component: Home },
];

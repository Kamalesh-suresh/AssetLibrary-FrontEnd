import { Routes } from '@angular/router';
import { Login } from './container/login/login';
import { Signup } from './container/signup/signup';
import { Home } from './container/home/home';
import { AddAsset } from './container/add-asset/add-asset';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'addAsset',
    component: AddAsset,
  },
  { path: 'editAsset/:id', component: AddAsset },
  { path: '', component: Home },
];

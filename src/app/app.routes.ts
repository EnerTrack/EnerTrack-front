import { Routes } from '@angular/router';

import { LayoutPageComponent } from './public/pages/layout-page/layout-page.components';
import { LoginPage } from './auth/pages/login-page/login-page';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
  },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.routes')
  },
  {
    path: 'auth',
    component: LoginPage
  },
  {
    path: '**',
    redirectTo: '',
  }
];

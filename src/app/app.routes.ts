import { Routes } from '@angular/router';

import { LayoutPageComponent } from './public/pages/layout-page/layout-page.components';

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
    path: '**',
    redirectTo: '',
  }
];

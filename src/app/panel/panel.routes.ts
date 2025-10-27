import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page';
import { ByCountryComponent } from './pages/by-country/by-country';

export const panelRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'by-country', component: ByCountryComponent },
      
    ]
  }
];

export default panelRoutes;

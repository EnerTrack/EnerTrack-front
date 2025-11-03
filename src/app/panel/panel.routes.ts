import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page';
import { ByCountryComponent } from './pages/by-country/by-country';
import { EnergyRecordPage } from './pages/energy-record-page/energy-record-page';
import { TypeEnergyPage } from './pages/type-energy-page/type-energy-page';
import { PersonPage } from './pages/person-page/person-page';
import { TypeDocumentPage } from './pages/document-type-page/document-type-page';


export const panelRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'by-country', component: ByCountryComponent },
      { path: 'energy', component: EnergyRecordPage },
      { path: 'energy-type', component: TypeEnergyPage },
      { path: 'person', component: PersonPage },
      { path: 'document-type', component: TypeDocumentPage },

    ]
  }
];

export default panelRoutes;

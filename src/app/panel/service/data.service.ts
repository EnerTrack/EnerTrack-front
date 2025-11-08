import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Top5Countries } from '../interfaces/Top5countries.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments.prod';
import { EnergyTypeUsageInterface } from '../interfaces/energyTypeUsage.interface';
import { DataCountryInterface } from '../interfaces/countryData.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;


  getTop5countries(): Observable<Top5Countries[]> {

    return this.http.get<Top5Countries[]>(`${this.baseULR}/data/energy-data/top5-countries`);
  }

  getEnergyTypeUsage(): Observable<EnergyTypeUsageInterface[]> {

    return this.http.get<EnergyTypeUsageInterface[]>(`${this.baseULR}/data/energy-data/energy-type-usage`);
  }

  getEmissionReductionStats(): Observable<DataCountryInterface[]> {

    return this.http.get<DataCountryInterface[]>(`${this.baseULR}/data/energy-data/emission-reduction`);
  }





}

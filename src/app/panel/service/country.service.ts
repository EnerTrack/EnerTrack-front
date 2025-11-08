import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import { CountryInterface } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;
  private countryURL: string = environment.countryURL;

  getCountryName(): Observable<CountryInterface[]>{

    return this.http.get<CountryInterface[]>(this.countryURL);
  }
}

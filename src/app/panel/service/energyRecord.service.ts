import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import { EnergyRecordContent, EnergyRecordInterface } from '../interfaces/energyRecord.interface';

@Injectable({
  providedIn: 'root'
})
export class EnergyRecordService {

  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;

  /* Metodo para obtener todas las energia */
  getEnergyRecord(): Observable<EnergyRecordInterface> {

    return this.http.get<EnergyRecordInterface>(`${this.baseULR}/energy/energy-record`);
  }

  /* Metodo para crear un tipo de documento*/
  createEnergyRecord(EnergyRecord: EnergyRecordContent): Observable<EnergyRecordInterface> {

    return this.http.post<EnergyRecordInterface>(`${this.baseULR}/energy/energy-record`, EnergyRecord)
  }

  /* Metodo para actualizar un tipo de documento*/
  updateEnergyRecord(EnergyRecord: EnergyRecordContent, id: string): Observable<EnergyRecordInterface> {

    return this.http.put<EnergyRecordInterface>(`${this.baseULR}/energy/energy-record/${id}`, EnergyRecord)
  }

}

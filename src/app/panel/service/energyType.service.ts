import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import { EnergyTypeContent, EnergyTypeInterface } from '../interfaces/energyType.interface';

@Injectable({
  providedIn: 'root'
})
export class EnergyTypeService {

  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;

  /* Metodo para obtener todos los tipos de documentos*/
  getEnergyType(): Observable<EnergyTypeInterface> {

    return this.http.get<EnergyTypeInterface>(`${this.baseULR}/energy/energy-type`);
  }

  /* Metodo para crear un tipo de documento*/
  createEnergyType(documentType: EnergyTypeContent): Observable<EnergyTypeContent> {

    return this.http.post<EnergyTypeContent>(`${this.baseULR}/energy/energy-type`, documentType)
  }

  /* Metodo para actualizar un tipo de documento*/
  updateEnergyType(documentType: EnergyTypeContent, id: string): Observable<EnergyTypeContent> {

    return this.http.put<EnergyTypeContent>(`${this.baseULR}/energy/energy-type/${id}`, documentType)
  }

}

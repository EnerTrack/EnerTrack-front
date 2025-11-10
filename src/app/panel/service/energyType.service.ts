import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.prod';
import { map, Observable } from 'rxjs';
import { EnergyTypeContent, EnergyTypeInterface } from '../interfaces/energyType.interface';
import { ValidatorInterface } from '../interfaces/asyncValidator.interface';

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

  /* Metodo para validar un tipo de documento*/
  validateName(name: string): Observable<ValidatorInterface> {
    return this.http.get<ValidatorInterface>(
      `${this.baseULR}/energy/energy-type/validate-name`,
      { params: { name } }
    );
  }
}

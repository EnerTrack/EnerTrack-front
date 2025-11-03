import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import { PersonContent, PersonInterface } from '../interfaces/person.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;

  /* Metodo para obtener todas la personas*/
  getPerson(): Observable<PersonInterface> {

    return this.http.get<PersonInterface>(`${this.baseULR}/users/person`);
  }

  /* Metodo para crea personas*/
  createPerson(person: PersonContent): Observable<PersonContent> {

    return this.http.post<PersonContent>(`${this.baseULR}/users/person`, person);
  }

  /* Metodo para actualizar personas*/
  updatePerson(person: PersonContent, id: string): Observable<PersonContent> {

    return this.http.put<PersonContent>(`${this.baseULR}/users/person/${id}`, person);
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import {  DocumentTypeContent, DocumentTypeinterface } from '../interfaces/documentType.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  private http = inject(HttpClient);
  private baseULR: string = environment.baseURL;

  /* Metodo para obtener todos los tipos de documentos*/
  getDocumentType(): Observable<DocumentTypeinterface>{

    return this.http.get<DocumentTypeinterface>(`${this.baseULR}/users/document-type`);
  }

    /* Metodo para crear un tipo de documento*/
  createDocumentType( documentType:  DocumentTypeContent): Observable<DocumentTypeinterface>{

    return this.http.post<DocumentTypeinterface>(`${this.baseULR}/users/document-type`, documentType)
  }

  /* Metodo para actualizar un tipo de documento*/
  updateDocumentType( documentType:  DocumentTypeContent, id: string): Observable<DocumentTypeinterface>{

    return this.http.put<DocumentTypeinterface>(`${this.baseULR}/users/document-type/${id}`, documentType)
  }
}

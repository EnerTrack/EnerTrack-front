import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { DocumenTypeForm } from "./document-type-form/document-type-form";
import { ListTypeDocument } from "./list-type-document/document-type-list";
import { DocumentTypeService } from '../../service/documentType.service';
import { ContentDocumentType, DocumentTypeinterface } from '../../interfaces/documentType.interface';

@Component({
  selector: 'type-document-page',
  imports: [ListTypeDocument, DocumenTypeForm],
  templateUrl: './document-type-page.html',
})
export class TypeDocumentPage implements OnInit {

  documentTypeService = inject(DocumentTypeService);
  documentType = signal<DocumentTypeinterface | null>(null);

  /*Almacena el documentos para editar*/
  documentToEdit?: ContentDocumentType | null = null;

  ngOnInit(): void {
    this.getDocumentType();
  }

  /**
   * Se ejecuta cuando se recibe el evento (reloadComponent) desde el componente hijo.
   */
  reloadList() {
    this.getDocumentType();
  }

  /*Metodo "getAll"*/
  getDocumentType() {
    this.documentTypeService.getDocumentType().subscribe(
      (response: DocumentTypeinterface) => {
        this.documentType.set(response);
        console.log(response);
      },
      (error) => {
        // Manejo de errores de la petición HTTP
        console.error('Error al obtener los tipos de documento:', error);
      }
    );
  }

  /**
   * Método que recibe el documento a editar desde el componente hijo `list-type-document`
   */
  onEditDocumentType(document: ContentDocumentType) {
    this.documentToEdit = document;
  }

  /**
   * Metodo para limpiar el estado de `documentToEdit`, para que el formulario vuelva a modo "crear"
   */
  onFormSubmitted() {
    this.documentToEdit = null;
  }
}

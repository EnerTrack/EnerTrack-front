import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';


import { DocumentTypeContent, DocumentTypeinterface} from '../../../interfaces/documentType.interface';
import { StatusTranslatePipe } from '../../../../pipes/StatusTranslate-pipe';

@Component({
  selector: 'list-type-document',
  imports: [NgClass, StatusTranslatePipe],
  templateUrl: './document-type-list.html',
})
export class ListTypeDocument {

  //Emitimos evento al componente padre
  @Output() reloadComponent = new EventEmitter<void>();
  @Output() editDocumentType = new EventEmitter< DocumentTypeContent>();

  documentType = input.required<DocumentTypeinterface | null>();

  /* Metodo que emite el click para actualizar lista*/
  onClick() {
    this.reloadComponent.emit();
  }


  /* Metodo que emite el valor que se va editar*/
  onEdit(documentType:  DocumentTypeContent) {
    this.editDocumentType.emit(documentType);
  }


}

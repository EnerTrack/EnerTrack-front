import { TitleCasePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list-type-document',
  imports: [TitleCasePipe, NgClass],
  templateUrl: './list-type-document.html',
})
export class ListTypeDocument {
    documentTypes = [
    { name: 'Cédula de Ciudadanía', status: 'activo' },
    { name: 'Pasaporte', status: 'pendiente' },
    { name: 'NIT', status: 'inactivo' },
  ];

    onEdit(energy: any) {
    console.log('Editar:', energy);
  }

  onDelete(id: string) {
    console.log('Eliminar ID:', id);
  }
}

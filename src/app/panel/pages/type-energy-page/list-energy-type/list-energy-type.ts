import { Component } from '@angular/core';

@Component({
  selector: 'list-energy-type',
  imports: [],
  templateUrl: './list-energy-type.html',
})
export class ListEnergyType {

    energyTypes = [
    { id: '1', name: 'Solar', status: 'Activo' },
    { id: '2', name: 'Eólica', status: 'Pendiente' },
    { id: '3', name: 'Hidráulica', status: 'Inactivo' },
    { id: '4', name: 'Biomasa', status: 'Activo' },
  ];

  onEdit(energy: any) {
    console.log('Editar:', energy);
  }

  onDelete(id: string) {
    console.log('Eliminar ID:', id);
  }
 }

import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list-person',
  imports: [NgClass, DatePipe, TitleCasePipe],
  templateUrl: './list-person.html',
})
export class ListPerson {
  persons = [
    {
      id: '1',
      name: 'Carlos',
      lastName: 'Ramírez',
      email: 'carlos.ramirez@example.com',
      phone: 3205551122,
      document: '1032456789',
      birthDate: new Date('1990-05-15'),
      status: 'activo',
      documentType: 'Cédula',
    },
    {
      id: '2',
      name: 'Lucía',
      lastName: 'González',
      email: 'lucia.gonzalez@example.com',
      phone: 3114429933,
      document: '56789901',
      birthDate: new Date('1985-09-12'),
      status: 'pendiente',
      documentType: 'Pasaporte',
    },
    {
      id: '3',
      name: 'Miguel',
      lastName: 'Soto',
      email: 'miguel.soto@example.com',
      phone: 3009927766,
      document: '90123345',
      birthDate: new Date('1992-03-25'),
      status: 'inactivo',
      documentType: 'NIT',
    },
  ];

  onEdit(person: any) {
    console.log('Editar persona:', person);
  }

  onDelete(person: any) {
    console.log('Eliminar persona:', person);
  }
 }

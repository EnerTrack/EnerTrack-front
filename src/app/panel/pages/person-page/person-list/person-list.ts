import { DatePipe, NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { PersonContent, PersonInterface, } from '../../../interfaces/person.interfaces';
import { StatusTranslatePipe } from '../../../../pipes/StatusTranslate-pipe';

@Component({
  selector: 'person-list',
  imports: [NgClass, DatePipe, StatusTranslatePipe],
  templateUrl: './person-list.html',
})
export class PersonList {

  @Output() reloadComponent = new EventEmitter<void>();
  @Output() editPerson = new EventEmitter<PersonContent>();

  person = input.required<PersonInterface | null>();

   /* Metodo que emite el click para actualizar lista*/
  onClick() {
    this.reloadComponent.emit();
  }

  /* Metodo que emite el valor que se va editar*/
  onEditPerson(person: PersonContent) {
    this.editPerson.emit(person)
  }

}

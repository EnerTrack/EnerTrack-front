import { Component, inject, OnInit, signal } from '@angular/core';
import { GeneratedPerson } from "./person-form/person-form";
import { PersonList } from "./person-list/person-list";
import { PersonService } from '../../service/person.service';
import { PersonContent, PersonInterface } from '../../interfaces/person.interfaces';


@Component({
  selector: 'app-person-page',
  imports: [GeneratedPerson, PersonList],
  templateUrl: './person-page.html',
})
export class PersonPage implements OnInit{


  personService = inject(PersonService);
  person = signal<PersonInterface | null>(null);

  personToEdit: PersonContent | null = null;

  ngOnInit(): void {
    this.getPerson();
  }

  reloadList(){
    this.getPerson()
  }


  getPerson() {

    this.personService.getPerson().subscribe(
      (response: PersonInterface) => {
        this.person.set(response);
        console.log(response);
      },
      (error) => {
        console.error('Error al obtener los tipos de documento:', error);
      }
    );
  }
  onEditPerson(person: PersonContent) {
    this.personToEdit = person;
  }

  onFormSubmitted(){
    this.personToEdit = null;
  }
}

import { Component } from '@angular/core';
import { GeneratedPerson } from "./generated-person/generated-person";
import { ListPerson } from "./list-person/list-person";

@Component({
  selector: 'app-person-page',
  imports: [GeneratedPerson, ListPerson],
  templateUrl: './person-page.html',
})
export class PersonPage { }

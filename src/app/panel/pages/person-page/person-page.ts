import { Component } from '@angular/core';
import { GeneratedPerson } from "./generated-person/generated-person";
import { GeneratedTypeDocument } from "../type-document-page/generated-type-document/generated-type-document";
import { ListTypeDocument } from "../type-document-page/list-type-document/list-type-document";
import { ListPerson } from "./list-person/list-person";

@Component({
  selector: 'app-person-page',
  imports: [GeneratedPerson, ListPerson],
  templateUrl: './person-page.html',
})
export class PersonPage { }

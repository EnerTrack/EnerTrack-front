import { Component } from '@angular/core';
import { GeneratedEnergyType } from "./generated-energy-type/generated-energy-type";
import { ListEnergyType } from "./list-energy-type/list-energy-type";
import { DocumenTypeForm } from '../document-type-page/document-type-form/document-type-form';


@Component({
  selector: 'type-energy-page',
  imports: [DocumenTypeForm, DocumenTypeForm],
  templateUrl: './type-energy-page.html',
})
export class TypeEnergyPage { }

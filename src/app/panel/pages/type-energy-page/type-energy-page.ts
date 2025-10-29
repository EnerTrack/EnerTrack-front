import { Component } from '@angular/core';
import { GeneratedEnergyType } from "./generated-energy-type/generated-energy-type";
import { ListEnergyType } from "./list-energy-type/list-energy-type";
import { GeneratedTypeDocument } from "../type-document-page/generated-type-document/generated-type-document";


@Component({
  selector: 'type-energy-page',
  imports: [GeneratedTypeDocument],
  templateUrl: './type-energy-page.html',
})
export class TypeEnergyPage { }

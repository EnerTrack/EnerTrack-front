import { Component, EventEmitter, input, Output } from '@angular/core';
import { EnergyTypeContent, EnergyTypeInterface } from '../../../interfaces/energyType.interface';
import { NgClass,} from '@angular/common';
import { StatusTranslatePipe } from '../../../../pipes/StatusTranslate-pipe';


@Component({
  selector: 'energy-type-list',
  imports: [NgClass, StatusTranslatePipe],
  templateUrl: './energy-type-list.html',
})
export class ListEnergyType {

  @Output() reloadComponent = new EventEmitter<void>();
  @Output() editEnergyType = new EventEmitter<EnergyTypeContent>();

  energyType = input.required<EnergyTypeInterface | null>();

  onClick() {
    this.reloadComponent.emit();
  }

  onEditEnergyType(energyType: EnergyTypeContent) {
    this.editEnergyType.emit(energyType)
  }

  onDelete(id: string) {
    console.log('Eliminar ID:', id);
  }
 }

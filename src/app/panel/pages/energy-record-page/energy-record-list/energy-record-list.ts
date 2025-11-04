import {  Component, EventEmitter, input, Output } from '@angular/core';
import { EnergyRecordContent, EnergyRecordInterface } from '../../../interfaces/energyRecord.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'list-energy',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './energy-record-list.html',
})
export class ListEnergy {

  //Emitimos evento al componente padre
  @Output() reloadComponent = new EventEmitter<void>();
  @Output() editEnergyRecord = new EventEmitter< EnergyRecordContent>();
  energyRecord = input.required<EnergyRecordInterface | null>();

  onClick() {
    this.reloadComponent.emit();
  }

  onEdit(energyRecord: EnergyRecordContent){
    this.editEnergyRecord.emit(energyRecord);
  }


}

import { Component, inject, OnInit, signal } from '@angular/core';
import { ListEnergy } from "./energy-record-list/energy-record-list";
import { EnergyRecordForm } from "./energy-record-form/energy-record-form";
import { EnergyRecordContent, EnergyRecordInterface } from '../../interfaces/energyRecord.interface';
import { EnergyRecordService } from '../../service/energyRecord.service';
import { EnergyTypeInterface } from '../../interfaces/energyType.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'energy-record-page',
  imports: [ListEnergy, EnergyRecordForm],
  templateUrl: './energy-record-page.html',
})
export class EnergyRecordPage implements OnInit {

  private energyRecordSerivce = inject(EnergyRecordService);
  energyRecord = signal<EnergyRecordInterface | null>(null);

  /*Almacena el documentos para editar*/
  energyRecordToEdit?: EnergyRecordContent | null = null;


  ngOnInit(): void {
    this.getEnergyRecord();
  }

  reloadList() {
     this.getEnergyRecord();
  }

  getEnergyRecord(){
    this.energyRecordSerivce.getEnergyRecord().subscribe(
      (response: EnergyRecordInterface) => {
        this.energyRecord.set(response);
      },
      (error) => {
        console.error('Failed al obtener el registro de energia', error);
      }
    );
  }

  onEditEnergyRecord(energyRecord: EnergyRecordContent){
    this.energyRecordToEdit = energyRecord;
  }

  onFormSubmitted() {
    this.energyRecordToEdit = null;
  }
}

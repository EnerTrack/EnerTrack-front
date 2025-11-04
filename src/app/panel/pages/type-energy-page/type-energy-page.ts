import { Component, inject, OnInit, signal } from '@angular/core';
import { GeneratedEnergyType } from "./energy-type-form/energy-type-form";
import { ListEnergyType } from "./energy-type-list/energy-type-list";
import { EnergyTypeService } from '../../service/energyType.service';
import { EnergyTypeContent, EnergyTypeInterface } from '../../interfaces/energyType.interface';

@Component({
  selector: 'type-energy-page',
  imports: [GeneratedEnergyType, ListEnergyType],
  templateUrl: './type-energy-page.html',
})
export class TypeEnergyPage implements OnInit{

  energyTypeService = inject(EnergyTypeService);
  energyType = signal<EnergyTypeInterface | null>(null);

  energyTypeToEdit?:  EnergyTypeContent | null = null;

  ngOnInit(): void {
    this.getEnergyType();
  }

  reloadList() {
    this.getEnergyType();
  }

  getEnergyType() {
    this.energyTypeService.getEnergyType().subscribe(
      (response: EnergyTypeInterface) => {
        this.energyType.set(response);

      },
      (error) => {
        // Manejo de errores de la petición HTTP
        console.error('Error al obtener los tipos de documento:', error);
      }
    );
  }

  onEditEnergyType(energyType:  EnergyTypeContent) {
    this.energyTypeToEdit = energyType;
  }

  onFormSubmitted() {
    this.energyTypeToEdit = null;
  }

}

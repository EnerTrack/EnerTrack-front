import { Component } from '@angular/core';



@Component({
  selector: 'generated-energy',
  imports: [],
  templateUrl: './generated-energy.html',
})
export class GeneratedEnergy {
   energy = {
    country: '',
    year: null,
    generatedMwh: null,
    capacityMwh: null,
    emissionReductionTons: null,
    investmentUsd: null,
    source: null,
    userId: '',
    energyTypeName: '',
  };

    countries: string[] = ['Colombia', 'México', 'Brasil', 'Canadá', 'Argentina', 'Chile'];
  energyTypes: string[] = ['Solar', 'Eólica', 'Hidráulica', 'Biomasa', 'Geotérmica'];

    onSubmit() {
    if (this.energy.country && this.energy.energyTypeName) {
      console.log('Formulario enviado ✅', this.energy);
    } else {
      console.warn('Por favor, complete todos los campos obligatorios ⚠️');
    }
  }

}

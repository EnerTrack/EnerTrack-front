import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { EnergyRecordContent } from '../../../interfaces/energyRecord.interface';
import { EnergyRecordService } from '../../../service/energyRecord.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../../service/country.service';
import { CountryInterface } from '../../../interfaces/country.interface';
import { EnergyTypeContent, EnergyTypeInterface } from '../../../interfaces/energyType.interface';
import { EnergyTypeService } from '../../../service/energyType.service';

@Component({
  selector: 'energy-record-form',
  imports: [ReactiveFormsModule],
  templateUrl: './energy-record-form.html',
})
export class EnergyRecordForm implements OnChanges, OnInit {


  private energyRedordService = inject(EnergyRecordService);
  private countriesSerive = inject(CountryService);
  private energyTypeService = inject(EnergyTypeService)
  private fb = inject(FormBuilder);

  countries = signal<CountryInterface[] | null>(null);
  energyTypes = signal<EnergyTypeInterface | null>(null);

  @Input() energyRecord?: EnergyRecordContent | null;
  @Output() onSubmitForm = new EventEmitter<void>();
  isEditMode = false;


  ngOnInit(): void {
    this.countriesSerive.getCountryName().subscribe(
      (Response: CountryInterface[]) => {
        this.countries.set(Response)
      }
    )

    this.energyTypeService.getEnergyType().subscribe(
      (response: EnergyTypeInterface) => {

        this.energyTypes.set(response)
      }
    )
  }

  formEnergyRecord: FormGroup = this.fb.group({
    country: ['', Validators.required],
    year: [, [Validators.required, Validators.min(1900), Validators.max(2100)]],
    generatedMwh: [, [Validators.required, Validators.min(0)]],
    capacityMwh: [, [Validators.required, Validators.min(0)]],
    emissionReductionTons: [, [Validators.min(0)]],
    investmentUsd: ['', [Validators.min(0)]],
    source: [, Validators.required],
    energyTypeName: ['', Validators.required],
    userId: ['cfff3af0-c65f-4bb8-bde4-1280a18315a5', Validators.required],
  })

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['energyRecord'] && this.energyRecord) {
      this.isEditMode = true; // Activamos el modo edición

      this.formEnergyRecord.patchValue({
        country: this.energyRecord.country,
        year: this.energyRecord.year,
        generatedMwh: this.energyRecord.generatedMwh,
        capacityMwh: this.energyRecord.capacityMwh,
        emissionReductionTons: this.energyRecord.emissionReductionTons,
        investmentUsd: this.energyRecord.investmentUsd,
        source: this.energyRecord.source,
        energyTypeName: this.energyRecord.energyType?.name,
        userId: this.energyRecord.userId
      });
    }
  }

  get currentEnergyRecord(): EnergyRecordContent {
    return this.formEnergyRecord.value
  }

  onSave() {
    //Validación: si el formulario es inválido, muestra errores visuales.

    if (this.formEnergyRecord.invalid) {
      this.formEnergyRecord.markAllAsTouched();
      return;
    }

    //Si estamos en modo edición (actualización)
    if (this.isEditMode && this.energyRecord) {
      this.energyRedordService
        .updateEnergyRecord(this.currentEnergyRecord, this.energyRecord.id)
        .subscribe(() => {
          alert('✅ Documento actualizado correctamente');
          this.resetForm();
        });
    } else {
      //Si estamos en modo creación (nuevo registro)
      this.energyRedordService
        .createEnergyRecord(this.currentEnergyRecord)
        .subscribe(() => {
          alert('✅ Documento creado correctamente');
          this.resetForm();
        });
    }
  }

  private resetForm() {
    this.formEnergyRecord.reset();
    this.isEditMode = false;
    this.onSubmitForm.emit();
  }
}

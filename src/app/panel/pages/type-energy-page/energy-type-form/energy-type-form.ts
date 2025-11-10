import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EnergyTypeContent, EnergyTypeInterface } from '../../../interfaces/energyType.interface';
import { EnergyTypeService } from '../../../service/energyType.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-util';

@Component({
  selector: 'energy-type-form',
  imports: [ReactiveFormsModule],
  templateUrl: './energy-type-form.html',
})
export class GeneratedEnergyType implements OnChanges {

  @Input() energyType?: EnergyTypeContent | null;

  @Output() onSubmitForm = new EventEmitter<void>();

  isEditMode = false;


  private energyTypeService = inject(EnergyTypeService);
  private fb = inject(FormBuilder);


  formEnergyType: FormGroup = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(3)],
      asyncValidators: [FormUtils.asyncUniqueValidator(this.energyTypeService, 'validateName', 'nameTaken')],
      updateOn: 'blur'
    }),
    status: ['', [Validators.required]],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['energyType'] && this.energyType) {
      this.isEditMode = true; // Activamos el modo edición
      this.formEnergyType.patchValue({
        name: this.energyType.name,
        status: this.energyType.status,
      });
    }
  }

  get currentEnergyType(): EnergyTypeContent {
    return this.formEnergyType.value;
  }

  onSave() {
    //Validación: si el formulario es inválido, muestra errores visuales.

    if (this.formEnergyType.invalid) {
      this.formEnergyType.markAllAsTouched();
      return;
    }

    //Si estamos en modo edición (actualización)
    if (this.isEditMode && this.energyType) {
      this.energyTypeService
        .updateEnergyType(this.currentEnergyType, this.energyType.id)
        .subscribe(() => {
          alert('✅ Tipo de energia actualizado correctamente');
          this.resetForm();
        });
    } else {
      //Si estamos en modo creación (nuevo registro)
      this.energyTypeService
        .createEnergyType(this.currentEnergyType)
        .subscribe(() => {
          alert('✅ Tipo de energia creado correctamente');
          this.resetForm();
        });
    }
  }

  private resetForm() {
    this.formEnergyType.reset();
    this.isEditMode = false;
    this.onSubmitForm.emit();
  }
}

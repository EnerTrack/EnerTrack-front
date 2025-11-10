import { AbstractControl, AsyncValidatorFn, ValidationErrors, FormArray, FormGroup } from "@angular/forms";
import { map, catchError, of } from "rxjs";
import { EnergyTypeService } from "../panel/service/energyType.service";
import { ValidatorInterface } from "../panel/interfaces/asyncValidator.interface";

export class FormUtils {

  // 🧩 VALIDACIONES DE ERROR SINCRÓNICAS
  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
        case 'nameTaken':
          return 'Este nombre ya existe';

        default:
          return 'Error no controlado'
      }


    }
    return null;
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (!!form.controls[fieldName].errors && form.controls[fieldName].touched);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (formArray.controls[index].errors && formArray.controls[index].touched);
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};
    return this.getTextError(errors);
  }

  static getFieldErrorInArry(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;
    const errors = formArray.controls[index].errors ?? {};
    return this.getTextError(errors);
  }

   // Validador asíncrono genérico
 static asyncNameValidator(energyTypeService: EnergyTypeService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const name = control.value?.trim();

      console.log(`1: ${name}`);

      // Si el campo está vacío o sin tocar, no ejecutamos validación
      if (!name) return of(null);

      // Llamamos al backend
      return energyTypeService.validateName(name).pipe(
        map((response: ValidatorInterface) =>
          response.exists ? { nameTaken: true } : null
        ),

        catchError(() => of(null))
        
      );
    };
  }

}

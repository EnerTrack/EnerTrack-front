import { AbstractControl, AsyncValidatorFn, ValidationErrors, FormArray, FormGroup } from "@angular/forms";
import { map, catchError, of, Observable } from "rxjs";
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
        case 'documentTaken':
          return 'Este documento ya existe'

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

   /**
   * Validador asíncrono genérico que funciona con cualquier servicio.
   *
   * @param service - Servicio que contiene un método de validación.
   * @param methodName - Nombre del método del servicio (por ejemplo: 'validateName', 'validateEmail').
   * @param errorKey - Clave del error que se devolverá si ya existe (por defecto: 'valueTaken').
   */
  static asyncUniqueValidator(
    service: any,
    methodName: string,
    errorKey: string = 'valueTaken'
  ): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value?.trim();
      if (!value) return of(null); // Si no hay valor, no valida

      console.log(`value: ${value}`);

      // Verifica si el método existe
      if (typeof service[methodName] !== 'function') {
        console.error(`❌ El método '${methodName}' no existe en el servicio proporcionado`);
        return of(null);
      }

      // Ejecuta la validación
      const result$: Observable<ValidatorInterface> = service[methodName](value);

      return result$.pipe(
        map((response: ValidatorInterface) =>
          response.exists ? { [errorKey]: true } : null
        ),
        catchError(() => of(null))
      );
    };
  }
}

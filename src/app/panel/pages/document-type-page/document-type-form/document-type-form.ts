import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocumentTypeService } from '../../../service/documentType.service';
import { ContentDocumentType } from '../../../interfaces/documentType.interface';

@Component({
  selector: 'document-type-form',
  imports: [ReactiveFormsModule],
  templateUrl: './document-type-form.html',
})
export class DocumenTypeForm implements OnChanges {

  /*Recibe el tipo de documento desde el componente padre.*/
  @Input() documentType?: ContentDocumentType | null;

  /*Emite un evento al componente padre cuando se guarda o actualiza el formulario */
  @Output() onSubmitForm = new EventEmitter<void>();

  /* Bandera para controlar si el formulario está en modo "editar" o "crear"*/
  isEditMode = false;

  private documentTypeService = inject(DocumentTypeService);
  private fb = inject(FormBuilder);


  formDocumentType: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    status: ['', [Validators.required]],
  });

  /**
   * Método del ciclo de vida `OnChanges`.
   * Se ejecuta automáticamente cuando cambia alguna propiedad de entrada (`@Input`).
   * En este caso, cuando `documentType` cambia, el formulario se llena con sus valores para editar.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['documentType'] && this.documentType) {
      this.isEditMode = true; // Activamos el modo edición
      this.formDocumentType.patchValue({
        name: this.documentType.name,
        status: this.documentType.status,
      });
    }
  }

  /**
   * Getter que devuelve el valor actual del formularioen el formato de `ContentDocumentType`.
   */
  get currentDocumentType(): ContentDocumentType {
    return this.formDocumentType.value;
  }

  /**
   * Método que se ejecuta al enviar el formulario (crear o actualizar),
   * valida el formulario y decide la acción según `isEditMode`.
   */
  onSave() {
    //Validación: si el formulario es inválido, muestra errores visuales.
    if (this.formDocumentType.invalid) {
      this.formDocumentType.markAllAsTouched();
      return;
    }

    //Si estamos en modo edición (actualización)
    if (this.isEditMode && this.documentType) {
      this.documentTypeService
        .updateDocumentType(this.currentDocumentType, this.documentType.id)
        .subscribe(() => {
          alert('✅ Documento actualizado correctamente');
          this.resetForm();
        });
    } else {
      //Si estamos en modo creación (nuevo registro)
      this.documentTypeService
        .createDocumentType(this.currentDocumentType)
        .subscribe(() => {
          alert('✅ Documento creado correctamente');
          this.resetForm();
        });
    }
  }

  /**
   * Restablece el formulario a su estado inicial,
   * desactiva el modo edición y notifica al componente padre.
   */
  private resetForm() {
    this.formDocumentType.reset();
    this.isEditMode = false;
    this.onSubmitForm.emit();
  }
}

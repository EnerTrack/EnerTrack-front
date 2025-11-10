import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { PersonContent } from '../../../interfaces/person.interfaces';
import { PersonService } from '../../../service/person.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocumentTypeService } from '../../../service/documentType.service';
import { DocumentTypeContent, DocumentTypeinterface } from '../../../interfaces/documentType.interface';
import { SelectModule } from 'primeng/select';
import { FormUtils } from '../../../../utils/form-util';
@Component({
  selector: 'person-form',
  imports: [ReactiveFormsModule, SelectModule],
  templateUrl: './person-form.html',

})
export class GeneratedPerson implements OnChanges, OnInit {

  private personService = inject(PersonService);
  private documentTypeService = inject(DocumentTypeService);
  private fb = inject(FormBuilder);

  @Input() person?: PersonContent | null;
  @Output() onSubmitForm = new EventEmitter<void>();

  documentType = signal<DocumentTypeContent[] | null>(null);
  /* Bandera para controlar si el formulario está en modo "editar" o "crear"*/
  isEditMode = false;


  formPerson: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [null, [Validators.required,]],
    document: ['', [Validators.required, Validators.minLength(5)], [FormUtils.asyncUniqueValidator(this.personService, 'validateDocument', 'documentTaken')]],
    documentType: ['', [Validators.required]],
    birthDate: [null, [Validators.required]],
    status: ['', [Validators.required]],
  });


  ngOnInit(): void {
    this.documentTypeService.getDocumentType().subscribe(
      (response: DocumentTypeinterface) => {
        this.documentType.set(response.content);

      },
      (error) => {
        // Manejo de errores de la petición HTTP
        console.error('Error al obtener los tipos de documento:', error);
      }
    );
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['person'] && this.person) {
      this.isEditMode = true;

      this.formPerson.patchValue({
        name: this.person.name,
        lastName: this.person.lastName,
        email: this.person.email,
        phone: this.person.phone,
        document: this.person.document,
        documentType: this.person.documentType,
        birthDate: this.person.birthDate,
        status: this.person.status,
      });
    }
  }

  get currentPerson(): PersonContent {
    return this.formPerson.value as PersonContent;
  }

  onSave() {

    console.log('Ingresa al metodo');

    if (this.formPerson.invalid) {
      this.formPerson.markAllAsTouched();
      return;
    }

    if (this.isEditMode && this.person) {

      this.personService.updatePerson(this.currentPerson, this.person.id)
        .subscribe(() => {
          alert('✅ Persona actualizada correctamente');
          this.resetForm();
        })
    }
    else {
      console.log('Ingresa al metodo');

      this.personService.createPerson(this.currentPerson)
        .subscribe({
          next: () => {
            alert('✅ Persona creada correctamente');
            this.resetForm();
          },
          error: (err) => console.error('Error al crear persona', err)
        });
    }

  }

  private resetForm() {
    this.formPerson.reset();
    this.isEditMode = false;
    this.onSubmitForm.emit();
  }
}

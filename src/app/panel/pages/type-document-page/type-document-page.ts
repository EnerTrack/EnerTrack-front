import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeneratedTypeDocument } from "./generated-type-document/generated-type-document";
import { ListTypeDocument } from "./list-type-document/list-type-document";

@Component({
  selector: 'type-document-page',
  imports: [GeneratedTypeDocument, ListTypeDocument],
  templateUrl: './type-document-page.html',
})
export class TypeDocumentPage { }

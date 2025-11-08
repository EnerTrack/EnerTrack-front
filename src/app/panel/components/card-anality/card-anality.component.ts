import { Component, Input } from '@angular/core';
import { DataCountryInterface } from '../../interfaces/countryData.interface';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'card-anality',
  imports: [NgClass, CommonModule],
  templateUrl: './card-anality.component.html',
})
export class CardAnality {

    @Input() countryData!: DataCountryInterface;
 }

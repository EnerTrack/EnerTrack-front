import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeneratedEnergy } from "./generated-energy/generated-energy";
import { ListEnergy } from "./list-energy/list-energy";

@Component({
  selector: 'energy-record-page',
  imports: [GeneratedEnergy, ListEnergy],
  templateUrl: './energy-record-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnergyRecordPage { }

import { Component, OnInit, inject, signal } from '@angular/core';
import { CardAnality } from "../../components/card-anality/card-anality.component";
import { ChartTop5 } from "./chart-top5/chart-top5";
import { ChartEnergyType } from "./chart-energy-type/chart-energy-type";
import { DataService } from '../../service/data.service';
import { DataCountryInterface } from '../../interfaces/countryData.interface';

@Component({
  selector: 'app-dashboard-page',
  imports: [ CardAnality, ChartTop5, ChartEnergyType],
  templateUrl: './dashboard-page.html',
})
export class DashboardPageComponent implements OnInit{

  dataService = inject(DataService);
  countryData = signal<DataCountryInterface[] | null>(null);

  ngOnInit(): void {
    this.dataService.getEmissionReductionStats().subscribe(
      (response: DataCountryInterface[]) =>{
        this.countryData.set(response);
        console.log({response});

      },
      (error) => {
        console.log('Error en la respuesta ',error);
      }
    )
  }
}

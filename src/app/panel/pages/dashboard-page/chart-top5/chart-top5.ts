import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import * as echarts from 'echarts/core';
import { Top5Countries } from '../../../interfaces/Top5countries.interface';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsDirective } from 'ngx-echarts';

// Registrar componentes de ECharts
echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  CanvasRenderer
]);

@Component({
  selector: 'chart-top5',
  imports: [NgxEchartsDirective],
  templateUrl: './chart-top5.html',
})
export class ChartTop5 implements OnInit {

  private energyService = inject(DataService);
  option!: echarts.EChartsCoreOption;

  ngOnInit(): void {
    this.loadTop5Countries();
  }

  loadTop5Countries() {
    this.energyService.getTop5countries().subscribe((data: Top5Countries[]) => {
      // Eje X → nombres de los países
      const xAxisData = data.map(d => d.country);

      // Obtener todos los tipos de energía distintos
      const allEnergyTypes = Array.from(
        new Set(data.flatMap(c => c.topEnergyTypes.map(e => e.energyTypeName)))
      );

      // Crear series por tipo de energía
      const series = allEnergyTypes.map((typeName, i) => ({
        name: typeName,
        type: 'line',
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: this.pickColor(i, true) },
            { offset: 1, color: this.pickColor(i, false) }
          ])
        },
        emphasis: { focus: 'series' },
        // Para cada país, buscar si tiene este tipo de energía
        data: data.map(country =>
          country.topEnergyTypes.find(e => e.energyTypeName === typeName)?.totalGeneratedMwh ?? 0
        )
      }));

      // Configuración del gráfico
      this.option = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: 'Top 5 Países y sus Tipos de Energía más Usados',
          textStyle: { color: '#fff' }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } }
        },
        legend: {
          textStyle: { color: '#fff' },
          data: allEnergyTypes
        },
        xAxis: [{
          type: 'category', boundaryGap: false, data: xAxisData,

        }],
        yAxis: [{ type: 'value' }],
        series
      };
    });
  }

  // Paleta de colores degradados
  pickColor(index: number, isStart: boolean): string {
    const gradients = [
      ['rgb(128, 255, 165)', 'rgb(1, 191, 236)'],
      ['rgb(0, 221, 255)', 'rgb(77, 119, 255)'],
      ['rgb(55, 162, 255)', 'rgb(116, 21, 219)'],
      ['rgb(255, 0, 135)', 'rgb(135, 0, 157)'],
      ['rgb(255, 191, 0)', 'rgb(224, 62, 76)']
    ];
    const colorPair = gradients[index % gradients.length];
    return isStart ? colorPair[0] : colorPair[1];
  }
}

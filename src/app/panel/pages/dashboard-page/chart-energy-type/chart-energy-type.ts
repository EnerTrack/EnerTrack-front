import { Component, inject, OnInit } from '@angular/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsDirective } from 'ngx-echarts';
import { DataService } from '../../../service/data.service';
import { EnergyTypeUsageInterface } from '../../../interfaces/energyTypeUsage.interface';

echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

@Component({
  selector: 'chart-energy-type',
  imports: [NgxEchartsDirective],
  templateUrl: './chart-energy-type.html',
})
export class ChartEnergyType implements OnInit {

  private energyService = inject(DataService);
  option!: echarts.EChartsCoreOption;

  ngOnInit(): void {
    this.loadChartData();
  }

  private loadChartData(): void {
    this.energyService.getEnergyTypeUsage().subscribe({
      next: (data: EnergyTypeUsageInterface[]) => {
        const chartData = data.map(item => ({
          value: item.usageCount,
          name: item.energyTypeName
        }));

        this.option = {
          backgroundColor: '#111827',
          title: {
            text: 'Tipos de Energía más utilizados',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} usos ({d}%)'
          },
          legend: {
            orient: 'horizontal',
            left: 'button',
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              name: 'Tipo de Energía',
              type: 'pie',
              radius: '60%',
              data: chartData,
              label: {
                color: '#fff'
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
      },
      error: (err) => {
        console.error('Error al cargar los datos del gráfico:', err);
      }
    });
  }
}

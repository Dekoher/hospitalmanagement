import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styles: []
})
export class DonutGraphComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() labels: Array<any>;
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  constructor() {
  }

  ngOnInit() {
    console.log('data=>', this.data);
    console.log('labels=>', this.labels);
    this.doughnutChartData = this.data;
    this.doughnutChartLabels = this.labels;
  }

}

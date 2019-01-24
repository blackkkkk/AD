import { Component, OnInit } from '@angular/core';
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'page-allSituation',
  templateUrl: './allSituation.component.html',
  styleUrls: ['./allSituation.less']
})

export class AllSituationComponent implements OnInit{
  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }
  constructor(){

  }

  ngOnInit(): void {
  }
}

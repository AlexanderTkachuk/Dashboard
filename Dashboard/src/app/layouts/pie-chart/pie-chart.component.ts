import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pieChartData: any[] = [359,450,120];
    public pieChartLabels: string[] = ['XYZ Logistics', 'Main ST Bakerry', 'Acme Hosting'];
    public pieChartType = 'doughnut';
    public colors: any[] = [
      { backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'] }
    ];
    public pieChartLegend = true;
    public pieChartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true
    }
  

}

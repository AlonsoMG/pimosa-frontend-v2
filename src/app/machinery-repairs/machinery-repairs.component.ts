import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../models/maintenance';
import * as $ from 'jquery';
import 'datatables.net-bs4';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-machinery-repairs',
  templateUrl: './machinery-repairs.component.html',
  styleUrls: ['./machinery-repairs.component.scss']
})
export class MachineryRepairsComponent implements OnInit {

  public maintenanceList: Maintenance[] = [];
  public tableWidget: any;
  private maintenanceMonthlyCostChart: Chart = null;

  constructor() { }

  ngOnInit() {
    this.maintenanceMonthlyCostChart = this.initMaintenanceMonthlyCostChart();
    this.generateTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initMaintenanceMonthlyCostChart(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('maintenanceMonthlyCostChart');
    let labels = [];
    let data = [...this.generateFuelTableData()];
    data.forEach((e) => {
      labels.push(`${e}`)
    });
    let chartTest = new Chart(chartTestCanvas, {
      type: 'line',
      data: {
        labels: [...labels],
        datasets: [{
          label: 'Costo',
          data: [...data],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
          fill: null
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Costo Mensual'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    return chartTest;
  }

  private initDataTable(): void {
    let table: any = $('#maintenanceTable');
    this.tableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private generateFuelTableData(): number[] {
    let data: number[] = [];
    for (let i = 0; i < 30; i++) {
      data.push(this.randomIntFromInterval(500, 5000));
    }
    return data;
  }

  private generateTable(): void {
    for (let i = 0; i < 100; i++) {
      let newMaintenance: Maintenance = new Maintenance(
        `${this.randomIntFromInterval(2019, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        `${this.randomIntFromInterval(0, 23)}:${this.randomIntFromInterval(1, 59)}`,
        'Descripción de la Reparación',
        this.randomIntFromInterval(5000, 250000)
      );
      this.maintenanceList.push(newMaintenance);
    }
  }

  private randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  toggleActiveClass(): void {
    let sidebar: HTMLElement = document.getElementById('sidebar');
    let content: HTMLElement = document.getElementById('content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }
}

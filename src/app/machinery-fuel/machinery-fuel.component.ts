import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Fuel } from '../models/fuel';
import * as $ from 'jquery';
import 'datatables.net-bs4';

@Component({
  selector: 'app-machinery-fuel',
  templateUrl: './machinery-fuel.component.html',
  styleUrls: ['./machinery-fuel.component.scss']
})
export class MachineryFuelComponent implements OnInit, AfterViewInit {

  public tableWidget: any;
  public fuelList: Fuel[] = [];
  private fuelChart: Chart = null;
  private fuelPriceChart: Chart = null;

  constructor() { }

  ngOnInit() {
    this.fuelChart = this.initFuelGraph();
    this.fuelPriceChart = this.initFuelPriceGraph();
    this.generateTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initFuelGraph(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('fuelGraph');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'bar',
      data: {
        labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja'],
        datasets: [{
          label: 'Consumo',
          data: [...this.generateFuelTableData()],
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Consumo'
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

  private initFuelPriceGraph(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('fuelPriceGraph');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'line',
      data: {
        labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja'],
        datasets: [{
          label: 'Costo',
          data: [...this.generateFuelTableData()],
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
          text: 'Costo'
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
    let table: any = $('#fuelTable');
    this.tableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private generateTable(): void {
    for (let i = 0; i < 100; i++) {
      let newFuel: Fuel = new Fuel(
        `${this.randomIntFromInterval(1990, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        `${this.randomIntFromInterval(0, 23)}:${this.randomIntFromInterval(1, 59)}`,
        this.randomIntFromInterval(1, 200),
        this.randomIntFromInterval(100, 10000),
      );
      this.fuelList.push(newFuel);
    }
  }

  private generateFuelTableData(): number[] {
    let data: number[] = [];
    for (let i = 0; i < 6; i++) {
      data.push(this.randomIntFromInterval(5, 22));
    }
    return data;
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

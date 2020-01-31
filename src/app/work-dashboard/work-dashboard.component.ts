import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { } from 'googlemaps';

@Component({
  selector: 'app-work-dashboard',
  templateUrl: './work-dashboard.component.html',
  styleUrls: ['./work-dashboard.component.scss']
})
export class WorkDashboardComponent implements OnInit {

  @ViewChild('map', null) mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  private perfChart: Chart = null;
  private hitChart: Chart = null;
  private izajChart: Chart = null;
  private desvChart: Chart = null;

  constructor() { }

  ngOnInit() {
    this.perfChart = this.initPerfChart();
    this.hitChart = this.initHitChart();
    this.izajChart = this.initIzajChart();
    this.desvChart = this.initDesvChart();
    this.initMap();
  }

  private initMap(): void {
    const mapProperties = {
      center: new google.maps.LatLng(19.431130, -99.133556),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(19.431130, -99.133556),
      map: this.map
    });
  }

  private initPerfChart(): Chart {
    let data = ['07AM', '08AM', '09AM', '10AM', '11AM', '12PM', '01PM', '02PM', '03PM', '04PM', '05PM', '06PM', '07PM', '08PM', '09PM', '10PM', '11PM'];
    let chartTestCanvas: HTMLElement = document.getElementById('perfChart');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'line',
      data: {
        labels: [...data],
        datasets: [{
          label: 'Metros',
          data: [...this.generateChartData()],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
          lineTension: 0.5,
          fill: null
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: false,
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

  private initHitChart(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('hitChart');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'pie',
      data: {
        labels: ['Golpe 1', 'Golpe 2', 'Golpe 3', 'Golpe 4'],
        datasets: [{
          label: 'Cantidad',
          data: [...this.generateChartData2()],
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1,
          fill: true
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'right'
        },
        title: {
          display: false,
        }
      }
    });

    return chartTest;
  }

  private initIzajChart(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('izajChart');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'bar',
      data: {
        labels: ['Izaje 1', 'Izaje 2', 'Izaje 3', 'Izaje 4', 'Izaje 5', 'Izaje 6'],
        datasets: [{
          label: 'Consumo',
          data: [...this.generateIzajData()],
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
          display: false,
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

  private initDesvChart(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('desvChart');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'polarArea',
      data: {
        labels: ['Desviación 1', 'Desviación 2', 'Desviación 3', 'Desviación 4', 'Desviación 5', 'Desviación 6'],
        datasets: [{
          label: 'Consumo',
          data: [...this.generateIzajData()],
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
          display: true,
          position: 'right'
        },
        title: {
          display: false,
        },
      }
    });

    return chartTest;
  }

  private generateIzajData(): number[] {
    let data: number[] = [];
    for (let i = 0; i < 6; i++) {
      data.push(this.randomIntFromInterval(5, 22));
    }
    return data;
  }

  private generateChartData(): number[] {
    let data: number[] = [];
    for (let i = 0; i < 16; i++) {
      data.push(this.randomIntFromInterval(5, 22));
    }
    return data;
  }

  private generateChartData2(): number[] {
    let data: number[] = [];
    for (let i = 0; i < 4; i++) {
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

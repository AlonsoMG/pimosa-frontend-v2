import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { } from 'googlemaps';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-machinery-dashboard',
  templateUrl: './machinery-dashboard.component.html',
  styleUrls: ['./machinery-dashboard.component.scss']
})
export class MachineryDashboardComponent implements OnInit {

  @ViewChild('map', null) mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  private fuelChart: Chart = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fuelChart = this.initFuelGraph();
    this.initMap();
  }

  navigateTo(index: number): void {

    let id = this.route.snapshot.params['id'];

    switch (index) {
      case 1:
        this.router.navigate([`/machinery/${id}/fuel/`]);
        break;
      case 2:
        this.router.navigate([`/machinery/${id}/onoff/`]);
        break;
      case 3:
        this.router.navigate([`/machinery/${id}/accessories/`]);
        break;
      case 4:
        this.router.navigate([`/machinery/${id}/maintenance/`]);
        break;
      case 5:
        this.router.navigate([`/machinery/${id}/repairs/`]);
        break;
      case 6:
        this.router.navigate([`/machinery/${id}/localization/`]);
        break;
    }
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

  private initFuelGraph(): Chart {
    let chartTestCanvas: HTMLElement = document.getElementById('fuelGraph');
    let chartTest = new Chart(chartTestCanvas, {
      type: 'bar',
      data: {
        labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja'],
        datasets: [{
          label: '',
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

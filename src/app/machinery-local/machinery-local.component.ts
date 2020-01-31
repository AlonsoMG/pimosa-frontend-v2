import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-machinery-local',
  templateUrl: './machinery-local.component.html',
  styleUrls: ['./machinery-local.component.scss']
})
export class MachineryLocalComponent implements OnInit {

  @ViewChild('map', null) mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  constructor() { }

  ngOnInit() {
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

  toggleActiveClass(): void {
    let sidebar: HTMLElement = document.getElementById('sidebar');
    let content: HTMLElement = document.getElementById('content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }

}

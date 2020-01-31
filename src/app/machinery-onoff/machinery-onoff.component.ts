import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OnOff } from '../models/onoff';
import * as $ from 'jquery';
import 'datatables.net-bs4';

@Component({
  selector: 'app-machinery-onoff',
  templateUrl: './machinery-onoff.component.html',
  styleUrls: ['./machinery-onoff.component.scss']
})
export class MachineryOnoffComponent implements OnInit, AfterViewInit {

  public onOffList: OnOff[] = [];
  public tableWidget: any;

  constructor() { }

  ngOnInit() {
    this.generateTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    let table: any = $('#onOffTable');
    this.tableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private generateTable(): void {
    for (let i = 0; i < 100; i++) {
      let action = (this.randomIntFromInterval(0, 1) === 1) ? 'Encendido' : 'Apagado';
      let newFuel: OnOff = new OnOff(
        `${this.randomIntFromInterval(2019, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        `${this.randomIntFromInterval(0, 23)}:${this.randomIntFromInterval(1, 59)}`,
        action,
      );
      this.onOffList.push(newFuel);
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

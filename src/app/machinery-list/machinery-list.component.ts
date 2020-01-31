import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net-bs4';
import { Machinery } from '../models/machinery';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrls: ['./machinery-list.component.scss']
})
export class MachineryListComponent implements OnInit, AfterViewInit {

  public tableWidget: any;
  public machineryList: Machinery[] = [];

  constructor() { }

  ngOnInit() {
    this.generateTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    let table: any = $('#machineryTable');
    this.tableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private generateTable(): void {
    for (let i = 0; i < 100; i++) {
      let newMachinery: Machinery = new Machinery(
        `Maquina ${i + 1}`,
        `${i + 1}`,
        this.randomIntFromInterval(50000, 800000),
        `${this.randomIntFromInterval(1990, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        this.randomIntFromInterval(5000, 80000),
        `Estado`
      );
      this.machineryList.push(newMachinery);
    }
  }

  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  toggleActiveClass(): void {
    let sidebar: HTMLElement = document.getElementById('sidebar');
    let content: HTMLElement = document.getElementById('content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }

}

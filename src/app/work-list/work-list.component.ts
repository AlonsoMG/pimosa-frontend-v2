import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Work } from '../models/project';
import * as $ from 'jquery';
import 'datatables.net-bs4';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit, AfterViewInit {

  public tableWidget: any;
  public workList: Work[] = [];

  constructor() { }

  ngOnInit() {
    this.generateTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    let table: any = $('#workTable');
    this.tableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private generateTable(): void {
    for (let i = 0; i < 100; i++) {
      let newWork: Work = new Work(
        `Trabajo ${i + 1}`,
        `Descripción de Trabajo`,
        `${this.randomIntFromInterval(1990, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        `${this.randomIntFromInterval(1990, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        `${this.randomIntFromInterval(1990, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`
      );
      this.workList.push(newWork);
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

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Accessory, AccessoryLog } from '../models/accessory';
import * as $ from 'jquery';
import 'datatables.net-bs4';

@Component({
  selector: 'app-machinery-accesories',
  templateUrl: './machinery-accesories.component.html',
  styleUrls: ['./machinery-accesories.component.scss']
})
export class MachineryAccesoriesComponent implements OnInit, AfterViewInit {

  public accessoryTableWidget: any;
  public accessoryLogTableWidget: any;

  public accessoriesList: Accessory[] = [];
  public accessoryLogList: AccessoryLog[] = [];

  constructor() { }

  ngOnInit() {

    this.generateAccessoryTable();
    this.generateAccessoryLogTable();

  }

  ngAfterViewInit(): void {
    this.initAccessoryTable();
    this.initAccessoryLogTable();
  }

  private initAccessoryTable(): void {
    let table: any = $('#accessoryTable');
    this.accessoryTableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private initAccessoryLogTable(): void {
    let table: any = $('#accessoryLogTable');
    this.accessoryLogTableWidget = table.DataTable({
      "info": false,
      "language": {
        "url": "../../assets/json/dataTables.spanish.json"
      }
    });
  }

  private generateAccessoryTable(): void {
    for (let i = 0; i < 100; i++) {
      let newAccessory: Accessory = new Accessory(
        `Accesorio ${i + 1}`,
        `Descripción de Accesorio`
      );
      this.accessoriesList.push(newAccessory);
    }
  }

  private generateAccessoryLogTable(): void {

    let action = (this.randomIntFromInterval(0, 1) === 1) ? 'Agregar' : 'Remover';

    for (let i = 0; i < 100; i++) {
      let newAccessoryLog: AccessoryLog = new AccessoryLog(
        `${this.randomIntFromInterval(1990, 2020)}-${this.randomIntFromInterval(1, 12)}-${this.randomIntFromInterval(1, 28)}`,
        `${this.randomIntFromInterval(0, 23)}:${this.randomIntFromInterval(1, 59)}`,
        action
      );
      this.accessoryLogList.push(newAccessoryLog);
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

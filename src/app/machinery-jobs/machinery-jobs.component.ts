import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machinery-jobs',
  templateUrl: './machinery-jobs.component.html',
  styleUrls: ['./machinery-jobs.component.scss']
})
export class MachineryJobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleActiveClass(): void {
    let sidebar: HTMLElement = document.getElementById('sidebar');
    let content: HTMLElement = document.getElementById('content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }

}

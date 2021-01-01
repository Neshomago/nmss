import {animate, state, style, transition, trigger} from '@angular/animations';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})

export class ClientsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
}
import { Component, OnInit } from '@angular/core';
import {SharedService}from 'src/app/services/shared.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private service:SharedService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "65%";

    this.dialog.open(AddTicketComponent,dialogConfig);
  }
}

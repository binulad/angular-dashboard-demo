import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tickets } from './tickets.model';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  isShowTicketForm: boolean = false;
  ticketList: Tickets[] = [];
  editTicket: any;
  editTicketId: number;
  isEdit: boolean = false;

  constructor(private ticket: TicketsService) {}

  ngOnInit(): void {
    this.loadTicketsData();
  }

  loadTicketsData() {
    this.ticket.getTickets().subscribe((data) => {
      this.ticketList = JSON.parse(JSON.stringify(data));
    });
  }

  onSubmitForm(ticketData: any) {
    this.isShowTicketForm = false;
    if(this.isEdit) {
      this.ticket.editTicket(this.editTicketId, ticketData).subscribe(() => {
        this.loadTicketsData();
        this.isEdit = false;
        this.editTicket = [];
      });
    }
    else {
      this.ticket.addUpdateTicket(ticketData).subscribe(() => {
        this.loadTicketsData();
      });
    }
  }

  deleteTicketData(ticketId: any) {
    this.ticket.deleteTicket(ticketId).subscribe(() => {
      this.loadTicketsData();
    });
  }

  editTicketData(ticketId: any) {
    this.ticket.getTicketById(ticketId).subscribe((data) => {
      this.editTicket = data;
      this.isShowTicketForm = true;
      this.isEdit = true;
      this.editTicketId = ticketId;
    })
  }

  addTicketData() {
    this.isShowTicketForm = true;
  }

  onCancelClick() {
    this.isShowTicketForm = false;
  }
}

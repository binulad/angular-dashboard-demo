import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  isShowTicketForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(event: any) {
    console.log(event);
    this.isShowTicketForm = false;
  }

  editTicketData(ticketId: any) {
    this.isShowTicketForm = true;
    console.log("Edit Ticket Data", ticketId);
  }

  addTicketData() {
    this.isShowTicketForm = true;
  }

  onCancelClick() {
    this.isShowTicketForm = false;
  }
}

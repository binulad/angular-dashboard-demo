import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AddUpdateTicket } from '../tickets.model';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  host: {
    class: 'card border-0 shadow h-100 flex-grow-1 h-100 overflow-hidden',
  },
})
export class TicketFormComponent implements OnInit {
  @Output() ticketData: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelClick: EventEmitter<any> = new EventEmitter<any>();

  ticketForm: AddUpdateTicket;

  constructor(private router: Router) {}

  ngOnInit() {}

  // Method called while click on Cancel button
  onClickCancel() {
    this.cancelClick.emit();
  }

  // Method called while click on Save button
  onClickSave() {
    console.log(this.ticketForm.value);
    
    // this.ticketData.emit();
  }
}

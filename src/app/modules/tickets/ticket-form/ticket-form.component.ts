import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EditTicket, Tickets } from '../tickets.model';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  host: {
    class: 'card border-0 shadow h-100 flex-grow-1 h-100 overflow-hidden',
  },
})
export class TicketFormComponent implements OnInit {
  @Input() editData: EditTicket[];

  @Output() ticketData: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTicket: EventEmitter<any> = new EventEmitter<any>();

  // Tickets Data Object
  ticketForm: FormGroup;

  // Boolean Value for Form 
  ticketFormSubmitted: boolean = false;

  cloneTicketForm: Tickets[] = [];

  //User List for Assignee and Requested By
  userList: Array<any>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      subject: new FormControl('', [Validators.required]),
      assignee: new FormControl('', [Validators.required]),
      requestedBy: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      createdDate: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required]),
    });

    this.userList = [
      {
        name: 'Heny',
        value: 'heny',
      },
      {
        name: 'Meera',
        value: 'meera',
      },
      {
        name: 'Riya',
        value: 'riya',
      },
      {
        name: 'Jisa',
        value: 'jisa',
      },
      {
        name: 'Jiya',
        value: 'jiya',
      },
    ];

    if (this.editData) {
      this.ticketForm.patchValue(this.editData);
      this.cloneTicketForm = JSON.parse(JSON.stringify(this.editData));
    }
  }

  get ticketFormControl(): any {
    return this.ticketForm.controls;
  }

  

  // Method called while click on Cancel button
  onClickCancel() {
    this.cancelClick.emit();
  }

  // Method called while click on Save button
  onClickSave() {
    this.ticketFormSubmitted = true;
    if (
      JSON.parse(JSON.stringify(this.ticketForm.value)) !==
      JSON.parse(JSON.stringify(this.cloneTicketForm))
    ) {
      this.ticketData.emit(this.ticketForm.value);
    } else {
      this.cancelClick.emit();
    }
  }
}

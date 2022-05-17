import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tickets } from '../tickets.model';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  host: {
    class: 'card border-0 shadow h-100 flex-grow-1 h-100 overflow-hidden',
  },
})
export class TicketListComponent implements OnInit {
  @Output() editTicketData: EventEmitter<any> = new EventEmitter<any>();
  @Output() addTicketData: EventEmitter<any> = new EventEmitter<any>();

  // Columns of the Tickets Listing
  columns: Array<any> = [
    {
      field: 'id',
      title: 'ID',
      sortable: true,
    },
    {
      field: 'subject',
      title: 'Subject',
      sortable: true,
    },
    {
      field: 'requestedBy',
      title: 'Requested by',
      sortable: true,
    },
    {
      field: 'assignee',
      title: 'Assignee',
      sortable: true,
    },
    {
      field: 'priority',
      title: 'Priority',
      sortable: true,
    },
    {
      field: 'status',
      title: 'Status',
      sortable: true,
    },
    {
      field: 'createdDate',
      title: 'Create Date',
      sortable: true,
    },
    {
      field: 'dueDate',
      title: 'Due Date',
      sortable: true,
    },
  ];
  // Ticket Listing Data
  ticketList: Tickets[] = [];
  // Dropdown status
  isShowDropdown: boolean = false;
  // Dropdown Index
  dropdownIndex: number = 0;
  // Sort Direction
  isSort: boolean = true;
  // Sort Column
  sortBy: string = '';

  constructor(private ticket: TicketsService, private router: Router) {
    this.ticket.getTickets().subscribe((data) => {
      this.ticketList = JSON.parse(JSON.stringify(data));
    });
  }

  ngOnInit(): void {}

  // Get Different Background class based on priority
  getPriority(value: string) {
    let priority: any;
    switch (value) {
      case 'high':
        priority = 'bg-danger';
        break;
      case 'medium':
        priority = 'bg-info';
        break;
      case 'low':
        priority = 'bg-warning';
        break;
    }
    return priority;
  }

  // Get Different Background class based on status
  getStatus(value: string) {
    let status: any;
    switch (value) {
      case 'open':
        status = 'bg-success';
        break;
      case 'closed':
        status = 'bg-secondary';
        break;
    }
    return status;
  }

  // Method called while click on More Action button
  openDropdown(ticketId: number) {
    if (this.dropdownIndex == ticketId && this.isShowDropdown) {
      this.isShowDropdown = false;
    } else {
      this.isShowDropdown = true;
    }
    this.dropdownIndex = ticketId;
  }

  // Sort Table Column
  sortColumn(column: string) {
    this.isSort = !this.isSort; //change the direction
    this.sortBy = column;
    let direction = this.isSort ? 1 : -1;

    this.ticketList.sort(function (a: any, b: any) {
      if (a[column] < b[column]) {
        return -1 * direction;
      } else if (a[column] > b[column]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  // Method called while click on Edit button
  onEdit(ticketId: any) {
    this.editTicketData.emit(ticketId);
  }

  // MEthod called while click on Add button
  onClickAdd() {
    this.addTicketData.emit();
  }
}
